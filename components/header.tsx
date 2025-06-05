"use client";

import { useEffect, useState } from "react";

type WeatherData = {
  temperature: number;
  city: string;
};

export default function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;

      // Reverse geocoding to get city name (optional)
      const geoRes = await fetch(
        `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}`
      );
      const geoData = await geoRes.json();
      const cityName = geoData.address?.city || geoData.address?.town || geoData.address?.state || "Your location";

      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        temperature: weatherData.current.temperature_2m,
        city: cityName,
      });
    });
  }, [hasMounted]);

  const isHidden = scrollY < 10;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-transform duration-300 bg-black/80 backdrop-blur-md text-white shadow ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className="text-xl font-bold">Ketan Pinto</h1>
      {hasMounted && weather ? (
        <div className="text-sm text-right">
          <p className="font-medium">
            {weather.city}
          </p>
          <p className="text-gray-300">{weather.temperature}°C</p>
        </div>
      ) : (
        <p className="text-sm text-gray-400">Fetching weather...</p>
      )}
    </header>
  );
}
