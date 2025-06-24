import { useState, useEffect, useRef } from "react";
import countries from "../data/countries.json";

export default function PhoneAuth() {
  const [step, setStep] = useState("login");
  const [selected, setSelected] = useState(countries[0]);
  const [number, setNumber] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [timer, setTimer] = useState(60);
  const inputRef = useRef([]);

  useEffect(() => {
    if (step === "verify") {
      inputRef.current[0]?.focus();
      setTimer(60);
    }
  }, [step]);

  useEffect(() => {
    if (step === "verify") {
      const interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleLogin = () => {
    if (number.length >= 7) {
      setStep("verify");
    }
  };

  const handleOTPChange = (val, i) => {
    if (!/^[0-9]$/.test(val)) return;
    const newOtp = [...otp];
    newOtp[i] = val;
    setOtp(newOtp);
    if (val && i < 4) inputRef.current[i + 1]?.focus();
  };

  const handleOTPKey = (e, i) => {
    if (e.key === "Backspace" && !otp[i] && i > 0) {
      inputRef.current[i - 1]?.focus();
    }
  };

  const fullPhone = selected.dial_code + number;

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white rounded-xl shadow">
      {step === "login" ? (
        <>
          <h2 className="text-center text-xl font-semibold mb-6">Авторизация</h2>
          <label className="block text-sm mb-2">Ваш номер телефона</label>
          <div className="relative mb-6">
            <div
              className="absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span>{selected.flag}</span>
            </div>
            <input
              type="text"
              placeholder={selected.dial_code}
              className="pl-10 pr-3 py-2 border rounded w-full focus:outline-pink-500"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {showDropdown && (
              <div className="absolute z-10 bg-white shadow-md border rounded w-full mt-1 max-h-40 overflow-y-auto">
                {countries.map((c) => (
                  <div
                    key={c.code}
                    className="px-3 py-1 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setSelected(c);
                      setShowDropdown(false);
                    }}
                  >
                    {c.flag} {c.name} ({c.dial_code})
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-between">
            <button className="text-sm">Отмена</button>
            <button
              className="bg-pink-500 text-white px-6 py-2 rounded hover:bg-pink-600"
              onClick={handleLogin}
            >
              Войти
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="mb-4 text-sm">
            Введите код, который был отправлен на ваш номер телефона
          </p>
          <p className="font-semibold mb-6">{fullPhone}</p>
          <div className="flex justify-center gap-3 mb-6">
            {otp.map((val, i) => (
              <input
                key={i}
                maxLength={1}
                ref={(el) => (inputRef.current[i] = el)}
                className="w-12 h-12 border border-gray-300 text-center text-xl rounded focus:outline-pink-500"
                value={val}
                onChange={(e) => handleOTPChange(e.target.value, i)}
                onKeyDown={(e) => handleOTPKey(e, i)}
              />
            ))}
            <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-semibold">
              {timer}
            </div>
          </div>
          <div className="flex justify-between">
            <button className="text-sm" onClick={() => setStep("login")}>
              Отмена
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded">
              Подтверждение
            </button>
          </div>
        </>
      )}
    </div>
  );
}
