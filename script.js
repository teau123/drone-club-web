function calculateFlightTime() {
    // 1. รับค่าจาก Input
    const capacity = parseFloat(document.getElementById('batteryCap').value);
    const current = parseFloat(document.getElementById('motorAmp').value);
    const resultArea = document.getElementById('resultArea');
    const flightTimeText = document.getElementById('flightTime');

    // 2. ตรวจสอบความถูกต้องของข้อมูล (Validation)
    if (isNaN(capacity) || isNaN(current) || capacity <= 0 || current <= 0) {
        alert("กรุณากรอกข้อมูลตัวเลขที่มากกว่า 0 ให้ครบถ้วน");
        return;
    }

    // 3. คำนวณ Flight Time
    // สูตร: (mAh / 1000) = Amp-hours
    // Time (Hours) = Amp-hours / Amps
    // Time (Minutes) = Time (Hours) * 60
    
    let ampHours = capacity / 1000;
    let timeInHours = ampHours / current;
    let timeInMinutes = timeInHours * 60;

    // 4. แสดงผลลัพธ์ (ทศนิยม 2 ตำแหน่ง)
    flightTimeText.innerText = timeInMinutes.toFixed(2);
    
    // แสดงกล่องผลลัพธ์ถ้ายังซ่อนอยู่
    resultArea.classList.remove('hidden');
}