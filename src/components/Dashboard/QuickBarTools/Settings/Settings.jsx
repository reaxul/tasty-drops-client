import { useEffect } from "react";
import "./Settings.css"; // Import your custom CSS file
import { RxCrossCircled } from "react-icons/rx";
import Toggle from "../../../Utils/Toggle";
export const Settings = ({ isShowSetting, setShowSetting }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowSetting(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowSetting]);
  return (
    <div
      className={`settings-panel ${
        isShowSetting ? "visible" : "invisible"
      } bg-white border border-slate-200 p-7 shadow-xl space-y-4 text-lg z-20 `}>
      <span className="flex items-center  justify-between">
        <h1 className="text-slate-500">Settings</h1>
        <button onClick={() => setShowSetting(!isShowSetting)}>
          <RxCrossCircled className="hover:text-slate-500 " size={22} />
        </button>
      </span>
      <hr className="border border-slate-200" />
      <h1 className="lg:text-[15px] font-semibold text-slate-500">Customize</h1>
      <div className="flex items-center gap-3 text-sm lg:text-[15px] ">
        <Toggle /> Dark Mode
      </div>
      <div className="flex items-center gap-3 text-sm lg:text-[15px] ">
        <Toggle /> Hide Quickbar
      </div>

      <h1 className="lg:text-[15px] font-semibold text-slate-500">
        Keyboard shortcuts
      </h1>
      <p className="text-sm">
        <span className="text-orange-500 font-mono font-semibold">Esc</span>{" "}
        close quickbar
      </p>
      <p className="text-sm">
        <span className="text-orange-500 font-mono font-semibold">
          Alt + (1 - 6)
        </span>{" "}
        to open quickbar
      </p>
    </div>
  );
};
