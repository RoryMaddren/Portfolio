  function updateClock() {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat("en-NZ", {
      timeZone: "Pacific/Auckland",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZoneName: "short"
    });

    document.getElementById("clock").textContent =
      formatter.format(now).toUpperCase();
  }

  updateClock();
  setInterval(updateClock, 1000);