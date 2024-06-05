dayjs.extend(dayjs_plugin_advancedFormat);
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);

function updateDateTime() {
    const now = dayjs();

    const selectedTimezone = document.getElementById('timezone-select').value || dayjs.tz.guess();
    document.getElementById('current-datetime').textContent = now.tz(selectedTimezone).format('YYYY-MM-DD HH:mm:ss');

    document.getElementById('time-zone').textContent = selectedTimezone;
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
    timezones.forEach(timezone => {
        const option = document.createElement('option');
        option.value = timezone;
        option.textContent = timezone.replace('_', ' ');
        timezoneSelect.appendChild(option);
    });

    timezoneSelect.value = dayjs.tz.guess();
}

document.getElementById('refresh-button').addEventListener('click', updateDateTime);
document.getElementById('timezone-select').addEventListener('change', updateDateTime);

window.onload = () => {
    populateTimezones();
    updateDateTime();
};