// ============================================
// 사이사주 - Main JavaScript File
// ============================================

// Global Variables
let selectedGender = null;
let selectedCalendar = 'solar'; // Default to solar (양력)
let myCalendar = 'solar';
let myGender = null;
let partnerCalendarMain = 'solar';
let partnerGenderMain = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeForm();
    initializeCompatibilityForm();
    createFloatingStars();
    setupGenderButtons();
    setupCalendarButtons();
});

// ============================================
// Form Initialization
// ============================================

function initializeForm() {
    // Populate year select
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 100; i++) {
        const year = currentYear - i;
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `${year}년`;
        yearSelect.appendChild(option);
    }

    // Populate month select
    const monthSelect = document.getElementById('month');
    for (let i = 1; i <= 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}월`;
        monthSelect.appendChild(option);
    }

    // Populate day select
    const daySelect = document.getElementById('day');
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${i}일`;
        daySelect.appendChild(option);
    }

    // Populate hour select
    const hourSelect = document.getElementById('hour');
    for (let i = 0; i < 24; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = `${String(i).padStart(2, '0')}시`;
        hourSelect.appendChild(option);
    }

    // Setup form submit
    document.getElementById('horoscopeForm').addEventListener('submit', handleFormSubmit);
}

// ============================================
// Compatibility Form Initialization
// ============================================

function initializeCompatibilityForm() {
    const currentYear = new Date().getFullYear();
    
    // Populate all year selects
    ['myYear', 'partnerYearMain'].forEach(id => {
        const select = document.getElementById(id);
        for (let i = 0; i < 100; i++) {
            const year = currentYear - i;
            const option = document.createElement('option');
            option.value = year;
            option.textContent = `${year}년`;
            select.appendChild(option);
        }
    });
    
    // Populate all month selects
    ['myMonth', 'partnerMonthMain'].forEach(id => {
        const select = document.getElementById(id);
        for (let i = 1; i <= 12; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i}월`;
            select.appendChild(option);
        }
    });
    
    // Populate all day selects
    ['myDay', 'partnerDayMain'].forEach(id => {
        const select = document.getElementById(id);
        for (let i = 1; i <= 31; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${i}일`;
            select.appendChild(option);
        }
    });
    
    // Populate all hour selects
    ['myHour', 'partnerHourMain'].forEach(id => {
        const select = document.getElementById(id);
        for (let i = 0; i < 24; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.textContent = `${String(i).padStart(2, '0')}시`;
            select.appendChild(option);
        }
    });
    
    // Setup my calendar buttons
    const myCalendarBtns = document.querySelectorAll('.my-calendar-btn');
    myCalendarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            myCalendarBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            myCalendar = this.dataset.calendar;
            lucide.createIcons();
        });
    });
    
    // Setup my gender buttons
    const myGenderBtns = document.querySelectorAll('.my-gender-btn');
    myGenderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            myGenderBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            myGender = this.dataset.gender;
        });
    });
    
    // Setup partner calendar buttons
    const partnerCalendarBtns = document.querySelectorAll('.partner-calendar-btn-main');
    partnerCalendarBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            partnerCalendarBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            partnerCalendarMain = this.dataset.calendar;
            lucide.createIcons();
        });
    });
    
    // Setup partner gender buttons
    const partnerGenderBtns = document.querySelectorAll('.partner-gender-btn-main');
    partnerGenderBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            partnerGenderBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            partnerGenderMain = this.dataset.gender;
        });
    });
    
    // Setup form submit
    document.getElementById('compatibilityFormMain').addEventListener('submit', handleCompatibilityFormSubmit);
}

function handleCompatibilityFormSubmit(e) {
    e.preventDefault();
    
    // Get values
    const myName = document.getElementById('myName').value.trim();
    const myYear = document.getElementById('myYear').value;
    const myMonth = document.getElementById('myMonth').value;
    const myDay = document.getElementById('myDay').value;
    const myHour = document.getElementById('myHour').value;
    
    const partnerName = document.getElementById('partnerNameMain').value.trim();
    const partnerYear = document.getElementById('partnerYearMain').value;
    const partnerMonth = document.getElementById('partnerMonthMain').value;
    const partnerDay = document.getElementById('partnerDayMain').value;
    const partnerHour = document.getElementById('partnerHourMain').value;
    
    // Validate
    if (!myName || !myYear || !myMonth || !myDay || !myGender) {
        alert('나의 정보를 모두 입력해주세요 (이름, 생년월일, 성별은 필수)');
        return;
    }
    
    if (!partnerName || !partnerYear || !partnerMonth || !partnerDay || !partnerGenderMain) {
        alert('상대방 정보를 모두 입력해주세요 (이름, 생년월일, 성별은 필수)');
        return;
    }
    
    // Save to sessionStorage and redirect
    const compatibilityData = {
        my: { name: myName, year: myYear, month: myMonth, day: myDay, hour: myHour, gender: myGender, calendar: myCalendar },
        partner: { name: partnerName, year: partnerYear, month: partnerMonth, day: partnerDay, hour: partnerHour, gender: partnerGenderMain, calendar: partnerCalendarMain }
    };
    
    sessionStorage.setItem('compatibilityData', JSON.stringify(compatibilityData));
    window.location.href = 'compatibility.html';
}

// ============================================
// Gender Button Setup
// ============================================

function setupGenderButtons() {
    const genderButtons = document.querySelectorAll('.gender-btn');
    genderButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            genderButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedGender = this.dataset.gender;
        });
    });
}

// ============================================
// Calendar Type Button Setup (음력/양력)
// ============================================

function setupCalendarButtons() {
    const calendarButtons = document.querySelectorAll('.calendar-btn');
    const calendarTypeLabel = document.getElementById('calendarTypeLabel');
    
    calendarButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            calendarButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedCalendar = this.dataset.calendar;
            
            // Update label
            if (selectedCalendar === 'solar') {
                calendarTypeLabel.textContent = '(양력)';
            } else {
                calendarTypeLabel.textContent = '(음력)';
            }
            
            // Reinitialize Lucide icons for the buttons
            lucide.createIcons();
        });
    });
}

// ============================================
// Form Submission
// ============================================

function handleFormSubmit(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const hour = document.getElementById('hour').value;

    // Validate
    const errors = validateInput(name, year, month, day, selectedGender);
    if (errors.length > 0) {
        showErrors(errors);
        return;
    }

    // Hide errors
    hideErrors();

    // Show loading
    showLoading(name);

    // Hide form and features
    document.getElementById('horoscopeForm').classList.add('hidden');
    document.getElementById('featuresSection').classList.add('hidden');
    document.getElementById('ctaSection').classList.add('hidden');

    // Simulate processing
    setTimeout(() => {
        const result = generateMockResult({ 
            name, 
            year, 
            month, 
            day, 
            hour, 
            gender: selectedGender, 
            calendar: selectedCalendar 
        });
        displayResults(name, result);
        hideLoading();
    }, 2000);
}

// ============================================
// Validation
// ============================================

function validateInput(name, year, month, day, gender) {
    const errors = [];

    if (!name || name.length === 0) {
        errors.push('이름을 입력해주세요.');
    }

    if (!year || !month || !day) {
        errors.push('생년월일을 모두 입력해주세요.');
    }

    const currentYear = new Date().getFullYear();
    if (year && (year < 1900 || year > currentYear)) {
        errors.push('올바른 연도를 입력해주세요.');
    }

    if (month && (month < 1 || month > 12)) {
        errors.push('올바른 월을 입력해주세요.');
    }

    if (day && (day < 1 || day > 31)) {
        errors.push('올바른 일을 입력해주세요.');
    }

    if (!gender) {
        errors.push('성별을 선택해주세요.');
    }

    return errors;
}

function showErrors(errors) {
    const errorList = document.getElementById('errorList');
    errorList.innerHTML = '';
    errors.forEach(error => {
        const li = document.createElement('li');
        li.textContent = `• ${error}`;
        errorList.appendChild(li);
    });
    document.getElementById('errorMessages').classList.remove('hidden');
}

function hideErrors() {
    document.getElementById('errorMessages').classList.add('hidden');
}

// ============================================
// Loading State
// ============================================

function showLoading(name) {
    document.getElementById('loadingText').textContent = `${name}님의 운세를 분석하고 있습니다...`;
    document.getElementById('loadingSection').classList.remove('hidden');
}

function hideLoading() {
    document.getElementById('loadingSection').classList.add('hidden');
}

// ============================================
// Mock Data Generation
// ============================================

function generateMockResult(input) {
    // Add calendar type to seed calculation (음력은 +1000, 양력은 그대로)
    const calendarOffset = input.calendar === 'lunar' ? 1000 : 0;
    const seed = parseInt(input.year) + parseInt(input.month) * 12 + parseInt(input.day) * 365 + (input.name.charCodeAt(0) || 0) + calendarOffset;
    
    const dailyFortunes = [
        {
            icon: '☀️',
            summary: '오늘은 새로운 시작을 위한 좋은 날입니다. 긍정적인 마음가짐으로 하루를 시작하세요.',
            score: 85,
            love: '연인과의 관계가 더욱 돈독해질 수 있는 날입니다. 솔직한 대화를 나눠보세요.',
            money: '예상치 못한 수입이 생길 수 있습니다. 하지만 충동구매는 자제하세요.',
            health: '전반적으로 건강한 상태입니다. 가벼운 운동으로 활력을 더하세요.',
            work: '업무에서 좋은 성과를 낼 수 있는 날입니다. 적극적으로 의견을 제시하세요.'
        },
        {
            icon: '🌙',
            summary: '차분하게 하루를 보내는 것이 좋습니다. 무리한 계획보다는 현재에 집중하세요.',
            score: 72,
            love: '상대방의 마음을 이해하려는 노력이 필요한 시기입니다.',
            money: '지출을 줄이고 저축에 신경 쓰는 것이 좋습니다.',
            health: '피로가 쌓일 수 있으니 충분한 휴식을 취하세요.',
            work: '꼼꼼하게 일을 처리하면 좋은 결과가 있을 것입니다.'
        },
        {
            icon: '⭐',
            summary: '행운이 함께하는 날입니다. 새로운 도전을 두려워하지 마세요.',
            score: 92,
            love: '새로운 만남의 기회가 있을 수 있습니다. 마음을 열어보세요.',
            money: '투자나 재테크에 관심을 가져볼 만한 시기입니다.',
            health: '활력이 넘치는 날입니다. 적극적으로 활동하세요.',
            work: '리더십을 발휘할 수 있는 기회가 올 것입니다.'
        }
    ];

    const yearlyFortunes = [
        {
            summary: '올해는 전반적으로 상승세를 타는 길한 해입니다. 상반기에 뿌린 씨앗이 하반기에 열매를 맺을 것이니, 초심을 잃지 말고 꾸준히 노력하십시오. 특히 대인관계와 재물운이 좋아 새로운 기회가 많이 찾아올 것입니다.',
            months: [
                { 
                    period: '1월 (정월)', 
                    desc: '새해의 시작, 만물이 소생하는 기운이 있습니다. 새로운 계획을 세우고 목표를 정하기 좋은 달입니다. 귀인의 도움이 있을 것이니 적극적으로 인맥을 넓히세요. 다만 지출이 많을 수 있으니 계획적인 소비가 필요합니다.', 
                    score: 75,
                    lucky: '복쪽, 검은색, 1일·11일·21일',
                    caution: '과욕을 부리지 마세요'
                },
                { 
                    period: '2월 (가을)', 
                    desc: '봄기운이 완연한 달입니다. 하던 일이 순조롭게 진행되며 노력한 만큼 결과를 얻습니다. 금전운이 좋아 예상치 못한 수입이 있을 수 있습니다. 건강에 주의하고 규칙적인 생활을 하세요.', 
                    score: 82,
                    lucky: '동쪽, 초록색, 2일·12일·22일',
                    caution: '건강 관리에 신경 쓰세요'
                },
                { 
                    period: '3월 (삼월)', 
                    desc: '만물이 성장하는 시기입니다. 새로운 도전을 시작하기 좋은 때이며, 학업이나 사업에서 좋은 성과를 거둘 수 있습니다. 연애운도 상승하니 새로운 만남에 마음을 열어보세요. 다만 말조심이 필요합니다.', 
                    score: 78,
                    lucky: '남동쪽, 연두색, 3일·13일·23일',
                    caution: '말조심, 언행에 주의'
                },
                { 
                    period: '4월 (사월)', 
                    desc: '기운이 왕성한 달입니다. 하고자 하는 일에 적극적으로 나서면 좋은 결과가 있을 것입니다. 직장에서 인정받을 일이 생기고 승진이나 보상의 기회가 올 수 있습니다. 투자는 신중하게 하세요.', 
                    score: 85,
                    lucky: '남쪽, 붉은색, 4일·14일·24일',
                    caution: '투자는 신중하게'
                },
                { 
                    period: '5월 (오월)', 
                    desc: '활동하기 좋은 계절입니다. 여행이나 외출이 길하며, 멀리서 좋은 소식이 들려올 것입니다. 사교활동을 활발히 하면 귀인을 만날 수 있습니다. 가족과의 시간도 소중히 하세요.', 
                    score: 88,
                    lucky: '남서쪽, 주황색, 5일·15일·25일',
                    caution: '가족 간 화목이 중요'
                },
                { 
                    period: '6월 (유월)', 
                    desc: '한 해의 중반, 잠시 쉬어가는 시기입니다. 너무 서두르지 말고 지금까지의 성과를 점검하세요. 건강에 적신호가 올 수 있으니 충분한 휴식을 취하세요. 무리한 일정은 피하는 것이 좋습니다.', 
                    score: 72,
                    lucky: '서쪽, 흰색, 6일·16일·26일',
                    caution: '건강 관리, 과로 주의'
                },
                { 
                    period: '7월 (칠월)', 
                    desc: '전성기를 맞이하는 달입니다. 하던 일이 결실을 맺고 노력이 빛을 발할 것입니다. 재물운이 크게 상승하며 사업가는 큰 수익을 올릴 수 있습니다. 주변 사람들에게 베푸는 마음을 가지세요.', 
                    score: 94,
                    lucky: '북서쪽, 금색, 7일·17일·27일',
                    caution: '교만하지 말고 겸손하게'
                },
                { 
                    period: '8월 (팔월)', 
                    desc: '수확의 계절, 그동안의 노력이 보상받는 시기입니다. 금전운이 매우 좋아 여러 방면에서 수입이 생길 것입니다. 감사하는 마음을 잊지 말고, 나눔과 기부를 실천하면 더 큰 복이 옵니다.', 
                    score: 92,
                    lucky: '북쪽, 검은색, 8일·18일·28일',
                    caution: '욕심 부리지 말 것'
                },
                { 
                    period: '9월 (구월)', 
                    desc: '안정적인 달입니다. 큰 변화보다는 현상 유지가 유리합니다. 가정에 경사가 있을 수 있으며, 가족과의 화목이 중요합니다. 새로운 시작보다는 마무리에 집중하세요.', 
                    score: 80,
                    lucky: '동북쪽, 갈색, 9일·19일·29일',
                    caution: '현상 유지가 최선'
                },
                { 
                    period: '10월 (시월)', 
                    desc: '정리의 시기입니다. 그동안 미루었던 일들을 마무리하고 정돈하세요. 계약이나 중요한 결정은 신중하게 하는 것이 좋습니다. 건강 검진을 받아보는 것도 좋습니다.', 
                    score: 76,
                    lucky: '서남쪽, 회색, 10일·20일·30일',
                    caution: '중요한 결정은 신중히'
                },
                { 
                    period: '11월 (동짓달)', 
                    desc: '겨울을 준비하는 달입니다. 내실을 다지고 내년을 준비하는 시기입니다. 저축을 늘리고 건강을 챙기세요. 가까운 사람들과의 관계를 돈독히 하면 내년에 큰 도움이 될 것입니다.', 
                    score: 78,
                    lucky: '중앙, 노란색, 11일·21일',
                    caution: '저축하고 준비하세요'
                },
                { 
                    period: '12월 (섣달)', 
                    desc: '한 해를 마무리하는 달입니다. 감사한 마음으로 한 해를 돌아보고, 내년의 계획을 세우세요. 가족과 함께 하는 시간이 복을 부릅니다. 봉사나 나눔 활동을 하면 내년에 더 큰 행운이 따를 것입니다.', 
                    score: 83,
                    lucky: '전방위, 금색, 12일·22일',
                    caution: '감사하는 마음 잊지 말기'
                }
            ]
        },
        {
            summary: '올해는 안정과 발전이 함께하는 해입니다. 급한 마음을 내려놓고 차근차근 기반을 다지면 중반 이후 큰 도약의 기회가 올 것입니다. 인내심을 가지고 꾸준히 노력하는 자세가 필요합니다.',
            months: [
                { period: '1월 (정월)', desc: '새해지만 조심스러운 시작입니다. 서두르지 말고 준비를 철저히 하세요. 지출을 줄이고 계획을 세우는 데 집중하세요.', score: 68, lucky: '동쪽, 파란색', caution: '신중한 시작' },
                { period: '2월 (가을)', desc: '조금씩 운이 트이기 시작합니다. 작은 일부터 차근차근 해결하면 자신감이 붙을 것입니다.', score: 72, lucky: '남쪽, 빨간색', caution: '작은 일부터 시작' },
                { period: '3월 (삼월)', desc: '봄기운과 함께 운세가 상승합니다. 새로운 기회를 잡을 수 있으니 적극적으로 도전하세요.', score: 79, lucky: '서쪽, 흰색', caution: '기회를 놓치지 마세요' },
                { period: '4월 (사월)', desc: '본격적인 성장의 시기입니다. 노력한 만큼 결과가 나오며 주변의 인정을 받게 됩니다.', score: 84, lucky: '북쪽, 검은색', caution: '겸손함 유지' },
                { period: '5월 (오월)', desc: '최고조에 이르는 달입니다. 중요한 결정을 내리기 좋은 시기이며 투자도 길합니다.', score: 90, lucky: '중앙, 노란색', caution: '과욕은 금물' },
                { period: '6월 (유월)', desc: '운이 정점을 찍고 조금씩 내려오기 시작합니다. 현상 유지에 집중하고 지킬 것을 지키세요.', score: 82, lucky: '남동쪽, 초록색', caution: '방심하지 마세요' },
                { period: '7월 (칠월)', desc: '여름 더위와 함께 잠시 침체기가 옵니다. 무리하지 말고 휴식을 취하며 재충전하세요.', score: 70, lucky: '북동쪽, 보라색', caution: '건강 챙기기' },
                { period: '8월 (팔월)', desc: '다시 기운이 살아납니다. 중요한 계약이나 협상이 잘 풀릴 것입니다.', score: 81, lucky: '서남쪽, 분홍색', caution: '계약서 꼼꼼히' },
                { period: '9월 (구월)', desc: '가을의 풍요로움처럼 좋은 일이 많은 달입니다. 금전운이 상승하고 인간관계도 원만합니다.', score: 86, lucky: '북서쪽, 은색', caution: '감사하는 마음' },
                { period: '10월 (시월)', desc: '안정적인 흐름이 이어집니다. 새로운 도전보다는 기존 일을 잘 마무리하는 데 집중하세요.', score: 77, lucky: '정남쪽, 주황색', caution: '마무리에 집중' },
                { period: '11월 (동짓달)', desc: '정리와 준비의 시기입니다. 내년을 위한 밑그림을 그리고 저축을 늘리세요.', score: 74, lucky: '정북쪽, 회색', caution: '준비와 저축' },
                { period: '12월 (섣달)', desc: '한 해를 마무리하며 감사하세요. 나눔을 실천하면 내년에 더 큰 복이 따를 것입니다.', score: 80, lucky: '전방위, 금색', caution: '나눔과 감사' }
            ]
        },
        {
            summary: '올해는 변화와 도전의 해입니다. 새로운 환경이나 기회가 찾아올 수 있으니 두려워하지 말고 적극적으로 받아들이세요. 특히 상반기보다 하반기의 운이 더 좋으니 인내심을 가지고 기다리세요.',
            months: [
                { period: '1월 (정월)', desc: '변화의 기운이 느껴지는 달입니다. 새로운 제안이나 기회가 올 수 있으니 열린 마음으로 받아들이세요.', score: 73, lucky: '동쪽, 파란색', caution: '변화를 두려워 말 것' },
                { period: '2월 (가을)', desc: '고민이 많은 시기입니다. 중요한 선택을 앞두고 있다면 주변의 조언을 구하세요.', score: 70, lucky: '서쪽, 흰색', caution: '조언을 구하세요' },
                { period: '3월 (삼월)', desc: '결정의 시기입니다. 용기를 내어 결단하면 좋은 결과가 있을 것입니다.', score: 76, lucky: '남쪽, 빨간색', caution: '용기 있게 결정' },
                { period: '4월 (사월)', desc: '새로운 시작이 순조롭습니다. 적응 기간이 필요하지만 긍정적인 마인드를 유지하세요.', score: 80, lucky: '북쪽, 검은색', caution: '긍정적 마인드' },
                { period: '5월 (오월)', desc: '점점 좋아지는 운세입니다. 노력이 인정받고 성과가 나타나기 시작합니다.', score: 85, lucky: '동남쪽, 초록색', caution: '꾸준함이 중요' },
                { period: '6월 (유월)', desc: '상승세가 이어집니다. 새로운 프로젝트를 시작하거나 투자하기 좋은 시기입니다.', score: 88, lucky: '북동쪽, 보라색', caution: '기회를 잡으세요' },
                { period: '7월 (칠월)', desc: '전성기입니다! 하고자 하는 일이 술술 풀리고 주변의 도움도 많습니다.', score: 93, lucky: '중앙, 금색', caution: '감사와 나눔' },
                { period: '8월 (팔월)', desc: '최고의 달입니다. 금전운이 매우 좋고 사랑운도 상승합니다. 지금이 기회입니다!', score: 95, lucky: '전방위, 무지개색', caution: '겸손함 유지' },
                { period: '9월 (구월)', desc: '여전히 좋은 운이 이어집니다. 다만 너무 욕심내지 말고 적당한 선에서 만족하세요.', score: 87, lucky: '남서쪽, 노란색', caution: '적당한 선 지키기' },
                { period: '10월 (시월)', desc: '조금씩 차분해지는 시기입니다. 그동안의 성과를 정리하고 감사하세요.', score: 81, lucky: '북서쪽, 회색', caution: '정리와 감사' },
                { period: '11월 (동짓달)', desc: '휴식이 필요한 달입니다. 충분히 쉬면서 내년을 준비하세요.', score: 75, lucky: '정북쪽, 은색', caution: '휴식과 재충전' },
                { period: '12월 (섣달)', desc: '한 해를 마무리하며 뿌듯함을 느낄 것입니다. 내년 계획을 구체적으로 세우세요.', score: 79, lucky: '동쪽, 파란색', caution: '계획 수립' }
            ]
        }
    ];

    const sajuAnalysis = [
        {
            sajuType: '강한 火(화) 기운의 사주',
            element: '화(火) 70%, 금(金) 15%, 목(木) 10%, 수(水) 5%',
            personality: '당신은 타고난 리더십과 강한 추진력을 가진 분입니다. 마치 태양처럼 주변을 밝히고 따뜻하게 만드는 에너지를 지니고 있습니다. 목표가 생기면 반드시 이루고야 마는 불굴의 의지를 가지고 있으며, 어려운 상황에서도 포기하지 않는 강인함이 있습니다.\n\n대인관계에서는 카리스마가 넘치고 자신감 있는 모습으로 사람들의 신뢰를 받습니다. 정의감이 강하고 옳지 못한 일을 보면 참지 못하는 성격이며, 주변 사람들에게 긍정적인 영향을 미치는 존재입니다. 단, 너무 직설적인 표현으로 인해 가끔 오해를 살 수 있으니 말을 조금 더 부드럽게 하는 연습이 필요합니다.',
            detailedTraits: {
                daily: '아침형 인간이며 하루를 계획적으로 보내는 것을 선호합니다. 일과 휴식의 균형을 중요하게 생각하며, 정리정돈을 좋아합니다.',
                relationship: '먼저 다가가는 편이며 친구들 사이에서 리더 역할을 자주 맡습니다. 의리가 있고 한번 맺은 인연은 오래 유지하는 편입니다.',
                work: '목표 지향적이며 성과를 중시합니다. 완벽주의 성향이 있어 디테일에 강하지만, 때로는 과도한 스트레스를 받을 수 있습니다.',
                decision: '신중하면서도 과감한 결정을 내립니다. 충분히 고민한 후에는 빠르게 실행에 옮기는 편입니다.'
            },
            strengths: ['강한 의지력과 추진력', '뛰어난 리더십', '책임감과 성실함', '명확한 판단력', '목표 달성 능력', '위기 대처 능력'],
            weaknesses: ['지나친 완벽주의', '감정 표현의 서툼', '고집이 센 편', '스트레스 관리 미흡', '휴식 부족', '타인 의견 수용 어려움'],
            jobs: [
                { category: '관리/경영', items: ['CEO', '임원', '프로젝트 매니저', '컨설턴트', '부동산 전문가'] },
                { category: '전문직', items: ['의사', '변호사', '회계사', '세무사', '건축가'] },
                { category: '공공/행정', items: ['공무원', '경찰', '소방관', '군인', '정치인'] },
                { category: '창업/사업', items: ['스타트업 대표', '프랜차이즈 운영', '무역업', '제조업'] }
            ],
            love: {
                style: '진지하고 책임감 있는 연애를 추구합니다. 겉으로는 강해 보이지만 사랑하는 사람에게는 한없이 따뜻하고 헌신적입니다.',
                ideal: '자신의 꿈과 목표가 확실하고 서로를 응원해줄 수 있는 파트너를 원합니다. 대화가 잘 통하고 가치관이 비슷한 사람과 좋은 관계를 유지합니다.',
                advice: '감정 표현을 좀 더 자주 하세요. 사랑한다는 말과 작은 선물, 스킨십이 관계를 더욱 돈독하게 만듭니다.'
            },
            wealth: {
                tendency: '계획적인 재테크를 선호하며 충동구매를 거의 하지 않습니다. 안정적인 수입을 만드는 능력이 뛰어나며, 40대 이후 재물운이 크게 상승합니다.',
                advice: '부동산이나 장기 투자가 유리합니다. 단기 투기보다는 착실하게 자산을 늘려가는 것이 좋습니다.',
                caution: '일에만 몰두하다 건강을 해치지 않도록 주의하세요. 건강이 곧 재물입니다.'
            },
            health: {
                risk: '스트레스성 질환, 소화기 계통, 심혈관 질환, 불면증',
                advice: '규칙적인 운동과 충분한 수면이 필수입니다. 특히 유산소 운동과 명상, 요가 등이 도움이 됩니다. 매운 음식과 카페인은 줄이고 채소와 과일을 많이 섭취하세요.',
                goodFood: '토마토, 연어, 견과류, 녹차, 베리류'
            },
            lifeFlow: {
                '20대': '기초를 다지는 시기입니다. 많이 배우고 경험하세요. 실패를 두려워하지 마세요.',
                '30대': '본격적인 성장의 시기입니다. 커리어가 급상승하며 결혼이나 중요한 결정을 하게 됩니다.',
                '40대': '전성기를 맞이합니다. 리더로서 역량을 발휘하며 재물운도 크게 좋아집니다.',
                '50대 이후': '안정과 여유를 찾는 시기입니다. 후배 양성과 사회 공헌에 관심을 가지세요.'
            },
            improvement: '마음의 여유를 가지세요. 완벽을 추구하는 것도 좋지만, 때로는 80%의 완성도로 만족하는 것도 필요합니다. 명상이나 취미 생활을 통해 스트레스를 관리하고, 주변 사람들과의 소통을 더욱 부드럽게 해보세요. 감정을 솔직하게 표현하는 연습을 하면 인간관계가 더욱 풍요로워질 것입니다.',
            luckyColor: '금색, 붉은색, 자주색',
            luckyNumber: 7,
            luckyDirection: '남쪽',
            luckyTime: '오전 9시~11시',
            best: '소띠, 닭띠',
            good: ['원숭이띠', '쥐띠', '뱀띠'],
            avoid: '말띠'
        },
        {
            sajuType: '조화로운 水(수) 기운의 사주',
            element: '수(水) 60%, 목(木) 25%, 금(金) 10%, 토(土) 5%',
            personality: '당신은 섬세하고 감성적인 영혼을 가진 분입니다. 마치 맑은 물처럼 순수하고 투명한 마음을 지니고 있으며, 예술적 감각이 뛰어납니다. 타인의 감정을 민감하게 읽어내는 공감 능력이 있어 상담이나 케어 분야에서 탁월한 재능을 발휘합니다.\n\n대인관계에서는 부드럽고 다정한 모습으로 사람들의 사랑을 받습니다. 경청을 잘하고 이해심이 깊어 많은 사람들이 당신에게 고민을 털어놓습니다. 하지만 때로는 타인의 감정에 너무 휘둘리지 않도록 자신만의 경계를 설정하는 것도 중요합니다.',
            detailedTraits: {
                daily: '여유로운 시간 관리를 선호하며 자연과 예술을 즐깁니다. 조용한 환경에서 혼자만의 시간을 가지는 것을 좋아합니다.',
                relationship: '깊고 진실한 관계를 선호하며 소수의 친구와 돈독한 우정을 나눕니다. 배려심이 깊고 먼저 손을 내미는 따뜻한 사람입니다.',
                work: '창의적인 업무 환경을 선호하며 팀워크를 중시합니다. 디테일한 작업에 강하지만 스트레스를 많이 받으면 번아웃이 올 수 있습니다.',
                decision: '신중하고 감정적인 측면을 많이 고려합니다. 충분한 시간을 가지고 결정하는 것을 선호합니다.'
            },
            strengths: ['뛰어난 감수성과 공감 능력', '창의력과 예술적 재능', '깊은 배려심', '인내심과 끈기', '적응력', '치유의 능력'],
            weaknesses: ['우유부단한 성향', '감정 기복', '자신감 부족', '과도한 걱정', '거절의 어려움', '타인 의견에 쉽게 영향받음'],
            jobs: [
                { category: '예술/문화', items: ['작가', '화가', '음악가', '디자이너', '영화감독', '사진작가'] },
                { category: '상담/치유', items: ['심리상담사', '간호사', '사회복지사', '힐링 테라피스트', '요가 강사'] },
                { category: '교육', items: ['교사', '유치원 교사', '예술 강사', '온라인 강의 크리에이터'] },
                { category: '서비스', items: ['호텔리어', '플로리스트', '카페 운영', '뷰티 전문가'] }
            ],
            love: {
                style: '낭만적이고 헌신적인 연애를 추구합니다. 감정 표현이 풍부하고 상대방의 마음을 세심하게 챙기는 스타일입니다.',
                ideal: '따뜻하고 이해심 깊은 사람을 선호합니다. 감성적인 교감을 중요하게 생각하며 함께 있을 때 편안함을 느끼는 사람과 잘 맞습니다.',
                advice: '자신의 의견도 중요합니다. 상대방에게만 맞추기보다 자신의 생각도 당당하게 표현하세요. 균형 잡힌 관계가 더 오래 지속됩니다.'
            },
            wealth: {
                tendency: '돈에 대한 욕심이 크지 않고 필요한 만큼만 사용하는 편입니다. 충동적인 소비보다는 감성적인 가치에 돈을 씁니다.',
                advice: '예술품, 공예품, 문화 상품 관련 투자가 유리합니다. 또한 온라인 콘텐츠 제작이나 크리에이터로서 수익을 창출할 수 있습니다.',
                caution: '재정 관리를 좀 더 체계적으로 하세요. 감정적인 소비를 줄이고 저축 습관을 들이면 좋습니다.'
            },
            health: {
                risk: '우울증, 불안장애, 소화기 질환, 알레르기, 만성피로',
                advice: '멘탈 케어가 매우 중요합니다. 스트레스를 받으면 즉시 해소하세요. 산책, 명상, 일기 쓰기 등이 도움이 됩니다. 규칙적인 생활 패턴을 유지하고 충분한 수면을 취하세요.',
                goodFood: '블루베리, 호두, 생선, 허브티, 다크 초콜릿'
            },
            lifeFlow: {
                '20대': '자신을 찾아가는 시기입니다. 다양한 경험을 통해 진정한 자신을 발견하세요.',
                '30대': '재능이 빛을 발하는 시기입니다. 창의적인 일로 인정받으며 안정적인 기반을 마련합니다.',
                '40대': '내면의 평화를 찾는 시기입니다. 정신적 성숙을 이루며 삶의 의미를 깊이 생각하게 됩니다.',
                '50대 이후': '지혜로운 멘토가 됩니다. 후배들에게 따뜻한 조언을 해주며 여유로운 삶을 즐기세요.'
            },
            improvement: '자신감을 키우세요. 당신은 생각보다 훨씬 능력 있는 사람입니다. 작은 성공 경험을 쌓아가며 자존감을 높이고, 때로는 단호하게 거절하는 법도 배워야 합니다. 긍정적인 자기 대화를 통해 내면의 힘을 키우세요.',
            luckyColor: '파란색, 흰색, 은색',
            luckyNumber: 3,
            luckyDirection: '북쪽',
            luckyTime: '오후 9시~11시',
            best: '토끼띠, 양띠',
            good: ['돼지띠', '개띠', '소띠'],
            avoid: '용띠'
        },
        {
            sajuType: '활발한 木(목) 기운의 사주',
            element: '목(木) 65%, 화(火) 20%, 수(水) 10%, 금(金) 5%',
            personality: '당신은 활발하고 사교적인 성격의 소유자입니다. 마치 봄날의 새싹처럼 생명력이 넘치고 긍정적인 에너지를 발산합니다. 호기심이 많고 새로운 것을 배우는 것을 즐기며, 어디서든 빠르게 적응하는 뛰어난 능력을 가지고 있습니다.\n\n대인관계에서는 밝고 유쾌한 성격으로 사람들에게 활력을 줍니다. 다양한 분야의 사람들과 쉽게 친해지며 네트워킹 능력이 탁월합니다. 여러 가지 일을 동시에 처리하는 멀티태스킹 능력도 뛰어나지만, 때로는 한 가지에 집중하는 연습도 필요합니다.',
            detailedTraits: {
                daily: '역동적이고 활동적인 일상을 선호합니다. 새로운 장소와 사람을 만나는 것을 즐기며 루틴보다는 변화를 좋아합니다.',
                relationship: '사교성이 뛰어나 친구가 많습니다. 유머 감각이 있고 분위기 메이커 역할을 자주 합니다. 다양한 그룹에 속해 있는 편입니다.',
                work: '창의적이고 자유로운 업무 환경을 선호합니다. 새로운 프로젝트에 열정적이지만 반복적인 업무는 지루해합니다.',
                decision: '직관적이고 빠른 결정을 내립니다. 행동력이 좋지만 때로는 신중함이 부족할 수 있습니다.'
            },
            strengths: ['뛰어난 커뮤니케이션 능력', '빠른 적응력', '긍정적 마인드', '도전정신', '창의성', '네트워킹 능력'],
            weaknesses: ['집중력 부족', '계획성 미흡', '변덕스러움', '끈기 부족', '충동적 결정', '산만함'],
            jobs: [
                { category: '마케팅/홍보', items: ['마케터', 'SNS 매니저', '광고 기획자', 'PR 전문가', '브랜드 매니저'] },
                { category: '미디어/방송', items: ['방송인', '유튜버', '아나운서', '리포터', 'MC'] },
                { category: '영업/세일즈', items: ['영업 관리자', '보험설계사', '부동산 중개인', '세일즈 코치'] },
                { category: '기획/창업', items: ['이벤트 플래너', '여행 가이드', '스타트업 대표', '프리랜서'] }
            ],
            love: {
                style: '열정적이고 즐거운 연애를 추구합니다. 데이트에서 항상 새로운 것을 시도하며 상대방을 즐겁게 해주려 노력합니다.',
                ideal: '활발하고 긍정적인 에너지를 가진 사람을 선호합니다. 함께 모험하고 새로운 경험을 즐길 수 있는 파트너와 잘 맞습니다.',
                advice: '관계의 깊이를 더하세요. 재미있는 것도 중요하지만 진지한 대화와 깊은 교감도 필요합니다. 한 사람과 오래 관계를 유지하는 연습을 하세요.'
            },
            wealth: {
                tendency: '돈이 들어오는 것도 빠르지만 나가는 것도 빠른 편입니다. 즐거움과 경험에 돈을 많이 쓰는 스타일입니다.',
                advice: '소셜 커머스, 온라인 마케팅, 콘텐츠 제작 등으로 수익을 올릴 수 있습니다. 다양한 수입원을 만드는 것이 유리합니다.',
                caution: '충동 소비를 줄이고 자동 저축을 설정하세요. 재테크 공부를 통해 돈 관리 능력을 키우는 것이 중요합니다.'
            },
            health: {
                risk: '과로, 수면 부족, 소화불량, 근골격계 질환, ADHD 성향',
                advice: '규칙적인 생활 패턴이 중요합니다. 충분한 수면과 균형 잡힌 식사를 하세요. 운동은 팀 스포츠나 그룹 운동이 잘 맞습니다.',
                goodFood: '현미, 채소, 과일, 등푸른 생선, 물'
            },
            lifeFlow: {
                '20대': '많은 것을 시도하는 시기입니다. 실패를 두려워하지 말고 다양한 경험을 쌓으세요.',
                '30대': '자신만의 길을 찾는 시기입니다. 여러 시행착오 끝에 적성에 맞는 일을 발견하게 됩니다.',
                '40대': '성숙기를 맞이합니다. 축적된 경험과 인맥을 바탕으로 크게 성장합니다.',
                '50대 이후': '자유로운 삶을 즐깁니다. 하고 싶은 일을 하며 여유롭게 살아가세요.'
            },
            improvement: '집중력을 키우세요. 한 번에 하나씩 완성하는 습관을 들이면 더 큰 성과를 낼 수 있습니다. 계획을 세우고 실행하는 연습을 하고, 중요한 결정은 하루 정도 시간을 두고 다시 생각해보세요. 깊이 있는 관계를 만들어가는 것도 인생에 큰 자산이 됩니다.',
            luckyColor: '초록색, 노란색, 연두색',
            luckyNumber: 5,
            luckyDirection: '동쪽',
            luckyTime: '오전 5시~7시',
            best: '호랑이띠, 개띠',
            good: ['말띠', '양띠', '토끼띠'],
            avoid: '뱀띠'
        }
    ];

    const dailyIndex = seed % dailyFortunes.length;
    const yearlyIndex = seed % yearlyFortunes.length;
    const sajuIndex = seed % sajuAnalysis.length;

    return {
        daily: dailyFortunes[dailyIndex],
        yearly: yearlyFortunes[yearlyIndex],
        saju: sajuAnalysis[sajuIndex]
    };
}

// ============================================
// Display Results
// ============================================

function displayResults(name, result) {
    // Get input values for display
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    const calendarType = selectedCalendar === 'solar' ? '양력' : '음력';
    
    // Update user name with birth info
    document.getElementById('resultUserName').textContent = `${name}님의 운세`;
    
    // Add birth info subtitle
    const resultSection = document.getElementById('resultsSection');
    const existingSubtitle = resultSection.querySelector('.birth-info-subtitle');
    if (!existingSubtitle) {
        const subtitle = document.createElement('p');
        subtitle.className = 'text-center text-white/60 -mt-8 mb-8 birth-info-subtitle';
        subtitle.innerHTML = `<i data-lucide="calendar" class="w-4 h-4 inline-block mr-1"></i>${year}년 ${month}월 ${day}일 (${calendarType})`;
        resultSection.querySelector('.container').insertBefore(subtitle, resultSection.querySelector('#resultCards'));
    } else {
        existingSubtitle.innerHTML = `<i data-lucide="calendar" class="w-4 h-4 inline-block mr-1"></i>${year}년 ${month}월 ${day}일 (${calendarType})`;
    }

    // Generate result cards
    const resultCards = document.getElementById('resultCards');
    resultCards.innerHTML = `
        ${generateDailyCard(result.daily)}
        ${generateYearlyCard(result.yearly)}
        ${generateSajuCard(result.saju)}
        ${generateShareSection(name, result.daily.score)}
    `;

    // Show results section
    document.getElementById('resultsSection').classList.remove('hidden');

    // Reinitialize Lucide icons
    lucide.createIcons();

    // Smooth scroll to results
    setTimeout(() => {
        document.getElementById('resultsSection').scrollIntoView({ behavior: 'smooth' });
    }, 100);

    // Animate progress bars
    setTimeout(() => {
        animateProgressBars();
    }, 500);
}

function generateDailyCard(daily) {
    return `
        <div class="card gold-border glow-effect slide-up" id="daily">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <i data-lucide="sun" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gradient">오늘의 운세</h3>
                    <p class="text-sm text-white/60">오늘 하루의 운세를 확인하세요</p>
                </div>
            </div>

            <div class="text-center mb-6 p-6 bg-accent/5 rounded-lg">
                <div class="text-6xl mb-4 pulse-icon">${daily.icon}</div>
                <p class="text-lg leading-relaxed text-white/90">${daily.summary}</p>
            </div>

            <div class="mb-6">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-accent">오늘의 운세 점수</span>
                    <span class="text-2xl font-bold text-accent">${daily.score}점</span>
                </div>
                <div class="progress-bar">
                    <div class="progress-fill" data-width="${daily.score}" style="width: 0%"></div>
                </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="result-detail-box">
                    <h4><i data-lucide="heart" class="w-5 h-5"></i>애정운</h4>
                    <p class="text-sm text-white/80 leading-relaxed">${daily.love}</p>
                </div>
                <div class="result-detail-box">
                    <h4><i data-lucide="dollar-sign" class="w-5 h-5"></i>금전운</h4>
                    <p class="text-sm text-white/80 leading-relaxed">${daily.money}</p>
                </div>
                <div class="result-detail-box">
                    <h4><i data-lucide="activity" class="w-5 h-5"></i>건강운</h4>
                    <p class="text-sm text-white/80 leading-relaxed">${daily.health}</p>
                </div>
                <div class="result-detail-box">
                    <h4><i data-lucide="briefcase" class="w-5 h-5"></i>직장운</h4>
                    <p class="text-sm text-white/80 leading-relaxed">${daily.work}</p>
                </div>
            </div>
        </div>
    `;
}

function generateYearlyCard(yearly) {
    const monthsHtml = yearly.months.map((m, index) => `
        <div class="month-card slide-up" style="animation-delay: ${0.05 * index}s">
            <div class="flex items-center justify-between mb-3">
                <h4 class="font-bold text-accent text-lg">${m.period}</h4>
                <div class="flex items-center gap-2">
                    <i data-lucide="star" class="w-4 h-4 text-accent"></i>
                    <span class="text-accent font-semibold">${m.score}점</span>
                </div>
            </div>
            <p class="text-white/80 leading-relaxed mb-3">${m.desc}</p>
            
            ${m.lucky ? `
                <div class="mt-3 p-3 bg-accent/5 rounded-lg">
                    <div class="flex items-center gap-2 mb-1">
                        <i data-lucide="sparkles" class="w-3 h-3 text-accent"></i>
                        <span class="text-xs text-accent font-semibold">길한 것</span>
                    </div>
                    <p class="text-xs text-white/70">${m.lucky}</p>
                </div>
            ` : ''}
            
            ${m.caution ? `
                <div class="mt-2 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20">
                    <div class="flex items-center gap-2 mb-1">
                        <i data-lucide="alert-circle" class="w-3 h-3 text-orange-400"></i>
                        <span class="text-xs text-orange-400 font-semibold">주의할 점</span>
                    </div>
                    <p class="text-xs text-white/70">${m.caution}</p>
                </div>
            ` : ''}
            
            <div class="progress-bar h-2 mt-3">
                <div class="progress-fill" data-width="${m.score}" style="width: 0%"></div>
            </div>
        </div>
    `).join('');

    return `
        <div class="card gold-border glow-effect slide-up" id="tojeong" style="animation-delay: 0.2s">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <i data-lucide="calendar-days" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gradient">신토정비결 (월별 운세)</h3>
                    <p class="text-sm text-white/60">한 해 12달의 흐름을 자세히 알려드립니다</p>
                </div>
            </div>

            <div class="mb-8 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <h4 class="font-bold text-accent mb-3 flex items-center gap-2">
                    <i data-lucide="scroll-text" class="w-5 h-5"></i>
                    올해의 총운
                </h4>
                <p class="text-lg leading-relaxed text-white/90">${yearly.summary}</p>
            </div>

            <div class="mb-4">
                <p class="text-sm text-white/60 text-center">
                    ※ 각 월마다 길한 방향, 색상, 날짜와 주의할 점을 확인하세요
                </p>
            </div>

            <div class="space-y-4">${monthsHtml}</div>
        </div>
    `;
}

function generateSajuCard(saju) {
    const strengthsHtml = saju.strengths.map((s, i) => `
        <li class="flex items-start gap-2 text-white/80 slide-up" style="animation-delay: ${0.1 * i}s">
            <span class="text-green-400 text-lg mt-0.5">✓</span>
            <span>${s}</span>
        </li>
    `).join('');

    const weaknessesHtml = saju.weaknesses.map((w, i) => `
        <li class="flex items-start gap-2 text-white/80 slide-up" style="animation-delay: ${0.1 * i}s">
            <span class="text-orange-400 text-lg mt-0.5">!</span>
            <span>${w}</span>
        </li>
    `).join('');

    const jobsHtml = saju.jobs.map(jobCat => `
        <div class="mb-4">
            <h5 class="text-accent font-semibold mb-2">${jobCat.category}</h5>
            <p class="text-white/70 text-sm">${jobCat.items.join(' · ')}</p>
        </div>
    `).join('');

    const goodHtml = saju.good.join(', ');

    const lifeFlowHtml = Object.entries(saju.lifeFlow).map(([age, desc]) => `
        <div class="mb-3">
            <h5 class="text-accent font-semibold mb-1">${age}</h5>
            <p class="text-white/70 text-sm leading-relaxed">${desc}</p>
        </div>
    `).join('');
    
    // 결혼 적령기 계산
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const day = parseInt(document.getElementById('day').value);
    const currentYear = new Date().getFullYear();
    const currentAge = currentYear - year;
    const seed = year + month * 12 + day * 365;
    const baseAge = 25 + (seed % 10);
    
    let marriageStatus = '';
    if (currentAge < baseAge) {
        marriageStatus = `<span class="text-accent">✨ 아직 최적의 시기가 오지 않았습니다!</span>`;
    } else if (currentAge >= baseAge && currentAge <= baseAge + 7) {
        marriageStatus = `<span class="text-green-400">🎉 지금이 바로 최적의 결혼 시기입니다!</span>`;
    } else {
        marriageStatus = `<span class="text-blue-400">💫 좋은 시기는 언제든 올 수 있습니다!</span>`;
    }

    return `
        <div class="card gold-border glow-effect slide-up" id="saju" style="animation-delay: 0.3s">
            <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <i data-lucide="user" class="w-6 h-6 text-accent"></i>
                </div>
                <div>
                    <h3 class="text-2xl font-bold text-gradient">사주 분석</h3>
                    <p class="text-sm text-white/60">당신의 타고난 성향을 알아보세요</p>
                </div>
            </div>

            <!-- 사주 타입 및 오행 -->
            <div class="mb-6 p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
                <h4 class="font-bold text-accent mb-3 flex items-center gap-2 text-xl">
                    <i data-lucide="sparkles" class="w-6 h-6"></i>${saju.sajuType}
                </h4>
                <div class="p-3 bg-primary/50 rounded-lg">
                    <p class="text-white/80 text-sm"><strong>오행 구성:</strong> ${saju.element}</p>
                </div>
            </div>

            <!-- 성격 분석 -->
            <div class="mb-6 p-6 bg-accent/5 rounded-lg">
                <h4 class="font-bold text-accent mb-3 flex items-center gap-2">
                    <i data-lucide="star" class="w-5 h-5"></i>성격 분석
                </h4>
                <p class="text-white/90 leading-relaxed whitespace-pre-line">${saju.personality}</p>
            </div>

            <!-- 세부 성향 -->
            <div class="mb-6 p-6 bg-muted/30 rounded-lg">
                <h4 class="font-bold text-accent mb-4 flex items-center gap-2">
                    <i data-lucide="compass" class="w-5 h-5"></i>세부 성향
                </h4>
                <div class="space-y-4">
                    <div>
                        <h5 class="text-accent/90 font-semibold mb-1 text-sm">🌅 일상생활</h5>
                        <p class="text-white/70 text-sm leading-relaxed">${saju.detailedTraits.daily}</p>
                    </div>
                    <div>
                        <h5 class="text-accent/90 font-semibold mb-1 text-sm">🤝 대인관계</h5>
                        <p class="text-white/70 text-sm leading-relaxed">${saju.detailedTraits.relationship}</p>
                    </div>
                    <div>
                        <h5 class="text-accent/90 font-semibold mb-1 text-sm">💼 업무 스타일</h5>
                        <p class="text-white/70 text-sm leading-relaxed">${saju.detailedTraits.work}</p>
                    </div>
                    <div>
                        <h5 class="text-accent/90 font-semibold mb-1 text-sm">⚖️ 의사결정</h5>
                        <p class="text-white/70 text-sm leading-relaxed">${saju.detailedTraits.decision}</p>
                    </div>
                </div>
            </div>

            <!-- 장점과 주의할 점 -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="strength-box">
                    <h4 class="font-bold text-green-400 mb-3 flex items-center gap-2">
                        <i data-lucide="thumbs-up" class="w-5 h-5"></i>장점
                    </h4>
                    <ul class="space-y-2">${strengthsHtml}</ul>
                </div>
                <div class="weakness-box">
                    <h4 class="font-bold text-orange-400 mb-3 flex items-center gap-2">
                        <i data-lucide="alert-circle" class="w-5 h-5"></i>주의할 점
                    </h4>
                    <ul class="space-y-2">${weaknessesHtml}</ul>
                </div>
            </div>

            <!-- 어울리는 직업 -->
            <div class="mb-6 p-6 bg-accent/5 rounded-lg">
                <h4 class="font-bold text-accent mb-4 flex items-center gap-2">
                    <i data-lucide="briefcase" class="w-5 h-5"></i>어울리는 직업
                </h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    ${jobsHtml}
                </div>
            </div>

            <!-- 연애/결혼 운 -->
            <div class="mb-6 p-6 bg-pink-500/10 border border-pink-500/30 rounded-lg">
                <h4 class="font-bold text-pink-400 mb-4 flex items-center gap-2">
                    <i data-lucide="heart" class="w-5 h-5"></i>연애 · 결혼운
                </h4>
                <div class="space-y-3">
                    <div>
                        <h5 class="text-pink-300 font-semibold mb-1 text-sm">💕 연애 스타일</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.love.style}</p>
                    </div>
                    <div>
                        <h5 class="text-pink-300 font-semibold mb-1 text-sm">💑 이상형</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.love.ideal}</p>
                    </div>
                    <div>
                        <h5 class="text-pink-300 font-semibold mb-1 text-sm">💡 조언</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.love.advice}</p>
                    </div>
                </div>
                
                <!-- 결혼 적령기 -->
                <div class="mt-4 pt-4 border-t border-pink-500/20">
                    <h5 class="text-pink-300 font-bold mb-3 flex items-center gap-2">
                        <i data-lucide="rings" class="w-5 h-5"></i>
                        최적의 결혼 시기
                    </h5>
                    <div class="text-center mb-4">
                        ${marriageStatus}
                    </div>
                    <div class="space-y-3">
                        <div class="p-4 bg-pink-500/30 rounded-lg">
                            <h6 class="font-bold text-pink-200 mb-2">🌟 최적의 나이: <span class="text-xl text-accent">${baseAge}세</span></h6>
                            <p class="text-white/90 text-sm leading-relaxed">${baseAge}세는 사주상 가장 조화로운 시기입니다. 이 시기에는 대인운이 상승하고 인연운이 활발해져 좋은 만남이 이어질 가능성이 높습니다.</p>
                        </div>
                        <div class="p-4 bg-purple-500/20 rounded-lg">
                            <h6 class="font-bold text-purple-200 mb-2">⭐ 차선책: ${baseAge + 3}세, ${baseAge + 7}세</h6>
                            <p class="text-white/90 text-sm leading-relaxed">만약 ${baseAge}세를 놓쳤다면 ${baseAge + 3}세나 ${baseAge + 7}세도 좋은 시기입니다. 특히 ${baseAge + 3}세는 재물운과 함께 상승하여 안정적인 결혼 생활의 기반을 다질 수 있습니다.</p>
                        </div>
                        <div class="p-3 bg-accent/10 rounded-lg">
                            <p class="text-accent text-xs">💡 <strong>참고:</strong> 결혼은 타이밍도 중요하지만, 서로를 이해하고 사랑하는 마음이 가장 중요합니다. 위 나이는 참고만 하시고, 준비가 되었을 때가 가장 좋은 시기입니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 재물운 -->
            <div class="mb-6 p-6 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h4 class="font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <i data-lucide="dollar-sign" class="w-5 h-5"></i>재물운
                </h4>
                <div class="space-y-3">
                    <div>
                        <h5 class="text-yellow-300 font-semibold mb-1 text-sm">💰 재테크 성향</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.wealth.tendency}</p>
                    </div>
                    <div>
                        <h5 class="text-yellow-300 font-semibold mb-1 text-sm">📈 투자 조언</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.wealth.advice}</p>
                    </div>
                    <div>
                        <h5 class="text-yellow-300 font-semibold mb-1 text-sm">⚠️ 주의사항</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.wealth.caution}</p>
                    </div>
                </div>
            </div>

            <!-- 건강운 -->
            <div class="mb-6 p-6 bg-green-500/10 border border-green-500/30 rounded-lg">
                <h4 class="font-bold text-green-400 mb-4 flex items-center gap-2">
                    <i data-lucide="activity" class="w-5 h-5"></i>건강운
                </h4>
                <div class="space-y-3">
                    <div>
                        <h5 class="text-red-300 font-semibold mb-1 text-sm">⚠️ 주의해야 할 질환</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.health.risk}</p>
                    </div>
                    <div>
                        <h5 class="text-green-300 font-semibold mb-1 text-sm">💪 건강 조언</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.health.advice}</p>
                    </div>
                    <div>
                        <h5 class="text-green-300 font-semibold mb-1 text-sm">🥗 좋은 음식</h5>
                        <p class="text-white/80 text-sm leading-relaxed">${saju.health.goodFood}</p>
                    </div>
                </div>
            </div>

            <!-- 인생 흐름 -->
            <div class="mb-6 p-6 bg-accent/5 rounded-lg">
                <h4 class="font-bold text-accent mb-4 flex items-center gap-2">
                    <i data-lucide="trending-up" class="w-5 h-5"></i>연령별 인생 흐름
                </h4>
                ${lifeFlowHtml}
            </div>

            <!-- 행운 아이템 -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div class="result-detail-box text-center">
                    <i data-lucide="palette" class="w-6 h-6 text-accent mx-auto mb-2"></i>
                    <h5 class="text-xs text-white/60 mb-1">행운의 색상</h5>
                    <p class="text-white/90 text-sm font-semibold">${saju.luckyColor}</p>
                </div>
                <div class="result-detail-box text-center">
                    <i data-lucide="hash" class="w-6 h-6 text-accent mx-auto mb-2"></i>
                    <h5 class="text-xs text-white/60 mb-1">행운의 숫자</h5>
                    <p class="text-accent text-2xl font-bold">${saju.luckyNumber}</p>
                </div>
                <div class="result-detail-box text-center">
                    <i data-lucide="compass" class="w-6 h-6 text-accent mx-auto mb-2"></i>
                    <h5 class="text-xs text-white/60 mb-1">행운의 방향</h5>
                    <p class="text-white/90 text-sm font-semibold">${saju.luckyDirection}</p>
                </div>
                <div class="result-detail-box text-center">
                    <i data-lucide="clock" class="w-6 h-6 text-accent mx-auto mb-2"></i>
                    <h5 class="text-xs text-white/60 mb-1">행운의 시간</h5>
                    <p class="text-white/90 text-sm font-semibold">${saju.luckyTime}</p>
                </div>
            </div>

            <!-- 궁합 -->
            <div class="p-6 bg-accent/5 rounded-lg mb-6">
                <h4 class="font-bold text-accent mb-4 flex items-center gap-2">
                    <i data-lucide="users" class="w-5 h-5"></i>띠별 궁합
                </h4>
                <div class="space-y-3">
                    <div>
                        <span class="text-sm text-white/60">💯 최고의 궁합:</span>
                        <p class="text-lg font-semibold text-green-400">${saju.best}</p>
                    </div>
                    <div>
                        <span class="text-sm text-white/60">😊 좋은 궁합:</span>
                        <p class="text-lg font-semibold text-blue-400">${goodHtml}</p>
                    </div>
                    <div>
                        <span class="text-sm text-white/60">⚠️ 피해야 할 궁합:</span>
                        <p class="text-lg font-semibold text-red-400">${saju.avoid}</p>
                    </div>
                </div>
            </div>

            <!-- 개선 방향 -->
            <div class="p-6 bg-gradient-to-br from-purple-500/10 to-accent/10 border border-purple-500/30 rounded-lg">
                <h4 class="font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <i data-lucide="lightbulb" class="w-5 h-5"></i>더 나은 삶을 위한 조언
                </h4>
                <p class="text-white/90 leading-relaxed">${saju.improvement}</p>
            </div>
        </div>
    `;
}

function generateShareSection(name, score) {
    return `
        <div class="text-center slide-up" style="animation-delay: 0.4s">
            <div class="flex flex-col items-center gap-4">
                <div class="flex items-center gap-2 text-white/60">
                    <i data-lucide="share-2" class="w-4 h-4"></i>
                    <span class="text-sm">운세 결과 공유하기</span>
                </div>
                <div class="flex gap-3">
                    <button onclick="shareKakao('${name}', ${score})" class="share-btn" style="background: #FEE500;" title="카카오톡 공유">
                        <i data-lucide="message-circle" class="w-6 h-6" style="color: #3C1E1E;"></i>
                    </button>
                    <button onclick="copyLink()" class="share-btn" style="background: rgba(212, 175, 55, 0.2);" title="링크 복사">
                        <i data-lucide="link" class="w-6 h-6 text-accent"></i>
                    </button>
                </div>
            </div>
            <p class="text-xs text-white/40 mt-3">친구들과 운세를 공유해보세요!</p>
            
            <!-- 처음으로 돌아가기 버튼 -->
            <div class="mt-8 pt-6 border-t border-accent/20">
                <button onclick="window.resetToHome()" type="button" class="btn-primary inline-flex items-center gap-2">
                    <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
                    처음으로 돌아가기
                </button>
            </div>
        </div>
    `;
}

// ============================================
// Progress Bar Animation
// ============================================

function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    progressFills.forEach((fill, index) => {
        const width = fill.dataset.width;
        setTimeout(() => {
            fill.style.width = `${width}%`;
        }, index * 100);
    });
}

// ============================================
// Share Functions
// ============================================

function shareKakao(name, score) {
    alert(`카카오톡 공유 기능\n\n${name}님의 오늘 운세 점수: ${score}점\n\n카카오 API 키를 설정하면 실제 공유가 가능합니다.`);
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('링크가 복사되었습니다!');
    }).catch(() => {
        alert('링크 복사에 실패했습니다.');
    });
}

// ============================================
// Tab Switching
// ============================================

window.switchTab = function(tab) {
    const fortuneTab = document.getElementById('fortuneTab');
    const compatibilityTab = document.getElementById('compatibilityTab');
    const fortuneSection = document.getElementById('fortuneSection');
    const compatibilitySection = document.getElementById('compatibilitySection');
    
    if (tab === 'fortune') {
        fortuneTab.classList.add('active');
        compatibilityTab.classList.remove('active');
        fortuneSection.classList.remove('hidden');
        compatibilitySection.classList.add('hidden');
    } else {
        fortuneTab.classList.remove('active');
        compatibilityTab.classList.add('active');
        fortuneSection.classList.add('hidden');
        compatibilitySection.classList.remove('hidden');
    }
    
    lucide.createIcons();
}

// CTA 버튼에서 탭으로 이동
window.goToFortune = function() {
    console.log('운세 보러 가기 클릭!');
    
    // 먼저 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 결과 섹션이 보이면 숨기기
    setTimeout(() => {
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection && !resultsSection.classList.contains('hidden')) {
            resultsSection.classList.add('hidden');
        }
        
        // 폼 섹션들 보이기
        const horoscopeForm = document.getElementById('horoscopeForm');
        const featuresSection = document.getElementById('featuresSection');
        const ctaSection = document.getElementById('ctaSection');
        
        if (horoscopeForm) horoscopeForm.classList.remove('hidden');
        if (featuresSection) featuresSection.classList.remove('hidden');
        if (ctaSection) ctaSection.classList.remove('hidden');
        
        // 운세보기 탭으로 전환
        window.switchTab('fortune');
    }, 300);
}

window.goToCompatibility = function() {
    console.log('궁합 보러 가기 클릭!');
    
    // 먼저 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // 결과 섹션이 보이면 숨기기
    setTimeout(() => {
        const resultsSection = document.getElementById('resultsSection');
        if (resultsSection && !resultsSection.classList.contains('hidden')) {
            resultsSection.classList.add('hidden');
        }
        
        // 폼 섹션들 보이기
        const horoscopeForm = document.getElementById('horoscopeForm');
        const featuresSection = document.getElementById('featuresSection');
        const ctaSection = document.getElementById('ctaSection');
        
        if (horoscopeForm) horoscopeForm.classList.remove('hidden');
        if (featuresSection) featuresSection.classList.remove('hidden');
        if (ctaSection) ctaSection.classList.remove('hidden');
        
        // 궁합보기 탭으로 전환
        window.switchTab('compatibility');
    }, 300);
}

// ============================================
// Utility Functions
// ============================================

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    alert('모바일 메뉴 (구현 예정)');
}

function createFloatingStars() {
    const container = document.getElementById('floatingStars');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const star = document.createElement('div');
        star.className = 'floating-star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${2 + Math.random() * 3}s`;
        container.appendChild(star);
    }
}

// ============================================
// 처음으로 돌아가기
// ============================================

window.resetToHome = function() {
    // 결과 섹션 숨기기
    document.getElementById('resultsSection').classList.add('hidden');
    
    // 폼 섹션 보이기
    document.getElementById('horoscopeForm').classList.remove('hidden');
    document.getElementById('featuresSection').classList.remove('hidden');
    document.getElementById('ctaSection').classList.remove('hidden');
    
    // 폼 초기화
    document.getElementById('horoscopeForm').reset();
    document.querySelectorAll('.gender-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.calendar-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.calendar-btn')[0].classList.add('active'); // 양력 기본 선택
    selectedGender = null;
    selectedCalendar = 'solar';
    
    // 궁합보기 폼 초기화
    partnerFormInitialized = false;
    partnerGender = null;
    partnerCalendar = 'solar';
    
    // 맨 위로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

