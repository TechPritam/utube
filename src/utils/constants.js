export const abbreviateNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num?.toString();
  };
  
export const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let remainingSeconds = seconds - hours * 3600 - minutes * 60;

    let parts = [];

    if (hours > 0) {
      parts.push(`${hours}`);
    }
    if (minutes > 0) {
      parts.push(`${String(minutes).padStart(2, "0")}`);
    }
    if (remainingSeconds > 0) {
      parts.push(`${String(remainingSeconds).padStart(2, "0")}`);
    }

    return parts.join(":");
  };