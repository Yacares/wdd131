function addWeatherRow(label, value) {
    const weatherTable = document.getElementById("weather-table");

    const row = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = label;

    const td = document.createElement("td");
    td.textContent = value;

    row.appendChild(th);
    row.appendChild(td);
    weatherTable.appendChild(row);
}




function calculateWindChill(tempC, windSpeedKm) {
    if (tempC <= 10 && windSpeedKm >= 4.8) {
        const wc = 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windSpeedKm, 0.16) + 0.3965 * tempC * Math.pow(windSpeedKm, 0.16);
        return wc.toFixed(1) + " °C";
    }
    else {
        return "N/A";
    }
}



addWeatherRow("Wind Chill:", `${calculateWindChill(9, 16)}`);




