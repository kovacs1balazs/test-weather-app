import BackButton from '@/app/components/BackButton';
import Image from 'next/image';

interface GeoData {
  name: string;
  lat: number;
  lon: number;
  country: string;
}

interface WeatherData {
  name: string;
  main: { temp: number; humidity: number };
  weather: { description: string; icon: string }[];
}

async function getCoordinates(city: string): Promise<GeoData> {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.OPENWEATHER_API_KEY}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Nem sikerült lekérni a koordinátákat.");
  }

  const data = await res.json();
  if (data.length === 0) {
    throw new Error("Nincs találat erre a városra.");
  }

  return data[0];
}

async function getWeather(lat: number, lon: number): Promise<WeatherData> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=hu`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Nem sikerült lekérni az időjárás adatokat.");
  }

  return res.json();
}

export default async function CityWeatherPage({
  params,
}: {
  params: { city: string };
}) {
  const geo = await getCoordinates(params.city);
  const weather = await getWeather(geo.lat, geo.lon);

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-sky-100 to-blue-200 font-sans gap-y-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
        <h1 className="text-xl font-semibold mb-2">
          {weather.name} ({geo.country})
        </h1>
        <div className="flex justify-center mb-4">
          <Image
            alt="weather"
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            width={80}
            height={80}
          />
        </div>
        <p className="text-lg">🌡 {weather.main.temp} °C</p>
        <p className="text-lg">💧 {weather.main.humidity}%</p>
        <p className="text-lg capitalize">☁ {weather.weather[0].description}</p>
      </div>
      <BackButton />
    </main>
  );
}