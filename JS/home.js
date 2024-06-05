dayjs.extend(dayjs_plugin_advancedFormat);
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

function updateDateTime() {
    const now = dayjs();

    const selectedTimezone = document.getElementById('timezone-select').value || dayjs.tz.guess();
    const formattedDateTime = now.tz(selectedTimezone).format('YYYY-MM-DD HH:mm:ss');
    const date = formattedDateTime.split(' ')[0];
    const time = formattedDateTime.split(' ')[1];
    
    document.getElementById('date').textContent = "Date:" + " " + date;
    document.getElementById('time').textContent =  time;
    document.getElementById('timezone').textContent = selectedTimezone;
}

function populateTimezones() {
    const timezones = [
        'America/New_York',
        'Europe/London',
        'Asia/Tokyo',
        'Australia/Sydney',
        'UTC'
    ];

    const timezoneSelect = document.getElementById('timezone-select');
    timezoneSelect.innerHTML = '';

    timezones.forEach(timezone => {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone.replace('_', ' ');
        timezoneSelect.appendChild(option);
    });

    timezoneSelect.value = dayjs.tz.guess();
}

document.getElementById('timezone-select').addEventListener('change', function () {
    document.getElementById('id01').style.display = "none"; 
    updateDateTime();
});

window.onload = () => {
    populateTimezones();
    updateDateTime();
    setInterval(updateDateTime, 1000);
};
