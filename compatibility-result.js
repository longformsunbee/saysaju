// ============================================
// 궁합 결과 페이지 JavaScript
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const data = sessionStorage.getItem('compatibilityData');
    
    if (!data) {
        alert('궁합 정보가 없습니다. 메인 페이지로 이동합니다.');
        window.location.href = 'index.html';
        return;
    }
    
    const compatibilityData = JSON.parse(data);
    displayCompatibilityResults(compatibilityData);
    lucide.createIcons();
});

function displayCompatibilityResults(data) {
    const { my, partner } = data;
    
    // Update title
    document.getElementById('resultTitle').textContent = `${my.name} 💕 ${partner.name}`;
    
    // Calculate compatibility score
    const score = calculateScore(my, partner);
    
    // Generate results HTML
    const resultsHTML = `
        <!-- 종합 궁합 점수 -->
        <div class="card gold-border glow-effect text-center slide-up max-w-3xl mx-auto">
            <div class="text-6xl mb-4">💕</div>
            <h3 class="text-5xl font-bold mb-4" style="color: ${getScoreColor(score)}">${score}점</h3>
            <h4 class="text-2xl font-bold text-accent mb-4">${getScoreLevel(score)}</h4>
            <p class="text-lg text-white/90 leading-relaxed mb-6">${getScoreSummary(score)}</p>
            
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${score}%; animation-delay: 0.5s"></div>
            </div>
            
            <div class="mt-6 grid grid-cols-2 gap-4 text-center">
                <div class="p-4 bg-blue-500/20 rounded-lg">
                    <p class="text-sm text-white/60 mb-1">${my.name}</p>
                    <p class="text-accent font-semibold">${my.year}.${my.month}.${my.day} (${my.calendar === 'solar' ? '양력' : '음력'})</p>
                </div>
                <div class="p-4 bg-pink-500/20 rounded-lg">
                    <p class="text-sm text-white/60 mb-1">${partner.name}</p>
                    <p class="text-accent font-semibold">${partner.year}.${partner.month}.${partner.day} (${partner.calendar === 'solar' ? '양력' : '음력'})</p>
                </div>
            </div>
        </div>
        
        <!-- 상세 궁합 분석 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${generateDetailedAnalysis(my, partner, score)}
        </div>
        
        <!-- 두 사람의 관계 조언 -->
        <div class="card gold-border glow-effect slide-up max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold text-gradient mb-6 flex items-center gap-2">
                <i data-lucide="lightbulb" class="w-6 h-6"></i>
                두 분을 위한 특별한 조언
            </h3>
            ${generateRelationshipAdvice(score)}
        </div>
    `;
    
    document.getElementById('compatibilityResultContent').innerHTML = resultsHTML;
    lucide.createIcons();
    
    // Animate progress bar
    setTimeout(() => {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            progressFill.style.width = score + '%';
        }
    }, 500);
}

function calculateScore(my, partner) {
    const seed1 = parseInt(my.year) + parseInt(my.month) * 12 + parseInt(my.day) * 365;
    const seed2 = parseInt(partner.year) + parseInt(partner.month) * 12 + parseInt(partner.day) * 365;
    const calOffset1 = my.calendar === 'lunar' ? 1000 : 0;
    const calOffset2 = partner.calendar === 'lunar' ? 1000 : 0;
    
    const totalSeed = seed1 + calOffset1 + seed2 + calOffset2;
    return 60 + (totalSeed % 41);
}

function getScoreColor(score) {
    if (score >= 90) return '#f9a8d4';
    if (score >= 80) return '#c084fc';
    if (score >= 70) return '#60a5fa';
    return '#fbbf24';
}

function getScoreLevel(score) {
    if (score >= 90) return '천생연분 💯';
    if (score >= 80) return '매우 좋은 궁합 ✨';
    if (score >= 70) return '좋은 궁합 🌟';
    return '노력이 필요한 궁합 💪';
}

function getScoreSummary(score) {
    if (score >= 90) return '두 분은 서로를 완벽하게 보완하는 최고의 궁합입니다. 가치관과 생활 방식이 조화롭고, 함께 있을 때 큰 편안함을 느낍니다. 서로에게 최고의 파트너가 될 것입니다.';
    if (score >= 80) return '매우 좋은 궁합입니다! 서로의 장점을 살리고 단점을 보완할 수 있는 관계입니다. 작은 노력으로도 행복한 관계를 오래 유지할 수 있습니다.';
    if (score >= 70) return '좋은 궁합입니다. 서로를 이해하고 존중한다면 행복한 관계를 만들 수 있습니다. 대화와 배려가 관계를 더욱 발전시킬 것입니다.';
    return '노력이 필요한 궁합입니다. 하지만 서로의 차이를 인정하고 이해하려 노력한다면 충분히 좋은 관계로 발전할 수 있습니다. 소통이 가장 중요합니다.';
}

function generateDetailedAnalysis(my, partner, score) {
    return `
        <!-- 연애 궁합 -->
        <div class="card slide-up" style="animation-delay: 0.1s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="heart" class="w-6 h-6 text-pink-400"></i>
                <h4 class="text-xl font-bold text-pink-400">연애 궁합</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 85 ? 
                    '감정적 교감이 매우 뛰어납니다. 서로의 마음을 잘 이해하고 공감대가 높아 깊은 사랑을 나눌 수 있습니다. 함께 있으면 시간 가는 줄 모를 것입니다.' :
                    '서로에게 끌리는 매력이 있지만, 표현 방식의 차이로 오해가 생길 수 있습니다. 솔직한 대화와 스킨십으로 감정을 나누세요.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.min(score + 5, 100)}%"></div>
            </div>
        </div>
        
        <!-- 결혼 궁합 -->
        <div class="card slide-up" style="animation-delay: 0.2s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="home" class="w-6 h-6 text-purple-400"></i>
                <h4 class="text-xl font-bold text-purple-400">결혼 궁합</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 85 ?
                    '결혼 후에도 행복한 가정을 꾸릴 가능성이 높습니다. 경제관념, 육아 방식, 가족관이 조화롭습니다. 평생의 동반자로서 서로를 지지하고 응원할 것입니다.' :
                    '결혼 생활에서는 타협과 이해가 필요합니다. 서로의 차이를 존중하고 함께 성장하는 자세가 중요합니다. 작은 갈등은 대화로 풀어가세요.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${score}%"></div>
            </div>
        </div>
        
        <!-- 소통 궁합 -->
        <div class="card slide-up" style="animation-delay: 0.3s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="message-circle" class="w-6 h-6 text-blue-400"></i>
                <h4 class="text-xl font-bold text-blue-400">소통 및 이해</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 80 ?
                    '대화가 잘 통하고 서로의 생각을 이해하는 능력이 뛰어납니다. 말하지 않아도 상대방의 마음을 알아차리는 텔레파시가 있습니다.' :
                    '의사소통에서 약간의 차이가 있을 수 있습니다. 경청하고 이해하려는 노력이 필요하며, 상대방의 입장에서 생각해보는 연습을 하세요.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.min(score + 3, 100)}%"></div>
            </div>
        </div>
        
        <!-- 성격 조화 -->
        <div class="card slide-up" style="animation-delay: 0.4s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="users" class="w-6 h-6 text-green-400"></i>
                <h4 class="text-xl font-bold text-green-400">성격 조화</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 85 ?
                    '성격이 매우 잘 맞습니다. 한 사람이 적극적일 때 다른 사람이 차분하게 조율하는 등 서로를 완벽하게 보완합니다. 다툼이 있어도 금방 화해할 수 있습니다.' :
                    '성격 차이가 있지만 이것이 오히려 매력이 될 수 있습니다. 서로의 다름을 인정하고 배울 점을 찾으면 더욱 성숙한 관계가 됩니다.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${score}%"></div>
            </div>
        </div>
        
        <!-- 가치관 일치도 -->
        <div class="card slide-up" style="animation-delay: 0.5s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="compass" class="w-6 h-6 text-yellow-400"></i>
                <h4 class="text-xl font-bold text-yellow-400">가치관 일치도</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 80 ?
                    '인생의 목표와 가치관이 비슷합니다. 중요한 결정을 내릴 때 의견이 잘 맞으며, 미래를 함께 그릴 수 있습니다. 같은 방향을 바라보며 함께 성장할 것입니다.' :
                    '가치관에서 차이가 있을 수 있습니다. 하지만 다양한 관점을 배울 수 있는 기회입니다. 서로의 가치관을 존중하며 공통점을 찾아가세요.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.max(score - 5, 60)}%"></div>
            </div>
        </div>
        
        <!-- 갈등 해결 능력 -->
        <div class="card slide-up" style="animation-delay: 0.6s">
            <div class="flex items-center gap-2 mb-4">
                <i data-lucide="shield-check" class="w-6 h-6 text-indigo-400"></i>
                <h4 class="text-xl font-bold text-indigo-400">갈등 해결 능력</h4>
            </div>
            <p class="text-white/90 leading-relaxed mb-4">
                ${score >= 80 ?
                    '다툼이 생겨도 현명하게 해결할 수 있는 능력이 있습니다. 서로 한 발씩 양보하며 감정을 조절할 줄 압니다. 건강한 갈등은 관계를 더 단단하게 만들 것입니다.' :
                    '갈등이 생기면 감정적으로 대응할 수 있습니다. 냉정 기간을 가진 후 차분히 대화하는 것이 좋습니다. 상대방을 이기려 하지 말고 문제를 함께 해결하세요.'
                }
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${Math.min(score + 2, 100)}%"></div>
            </div>
        </div>
    `;
    
    document.getElementById('compatibilityResultContent').innerHTML = resultsHTML;
    lucide.createIcons();
}

function generateRelationshipAdvice(score) {
    const adviceData = [
        {
            title: '💬 소통의 기술',
            desc: score >= 80 ? 
                '이미 소통이 잘 되는 두 분이지만, 더욱 깊은 대화를 나누세요. 하루 30분, 서로의 이야기에 집중하는 시간을 가지면 관계가 더욱 돈독해집니다.' :
                '경청이 가장 중요합니다. 상대방이 말할 때 끼어들지 말고 끝까지 들어주세요. "나-전달법"으로 감정을 표현하면 오해를 줄일 수 있습니다.'
        },
        {
            title: '🎁 사랑의 표현',
            desc: '작은 선물, 칭찬, 스킨십으로 사랑을 자주 표현하세요. "사랑해", "고마워", "미안해"를 아끼지 마세요. 기념일을 챙기고 깜짝 이벤트로 설렘을 유지하세요.'
        },
        {
            title: '⚖️ 균형 잡힌 관계',
            desc: '한 사람이 모든 것을 맞추는 관계는 오래 가지 못합니다. 서로의 의견을 존중하고 타협점을 찾으세요. 개인 시간도 소중히 여기며 적절한 거리를 유지하는 것도 중요합니다.'
        },
        {
            title: '🌱 함께 성장하기',
            desc: score >= 85 ?
                '두 분은 함께 성장할 수 있는 최고의 파트너입니다. 공동의 목표를 세우고 함께 도전하세요. 서로의 꿈을 응원하고 성장을 지지해주세요.' :
                '서로의 성장을 응원하세요. 상대방의 취미와 관심사를 존중하고, 새로운 것을 함께 배우는 시간을 가지세요. 함께 성장하는 커플이 가장 행복합니다.'
        },
        {
            title: '🔥 갈등 해결법',
            desc: '다툼이 생기면 즉시 해결하려 하지 마세요. 서로 감정이 가라앉을 시간을 준 후, 조용한 곳에서 차분히 대화하세요. 상대방의 입장을 먼저 이해하려는 노력이 필요합니다.'
        },
        {
            title: '💑 장기적 관계 유지',
            desc: '권태기는 누구에게나 옵니다. 그럴 때일수록 초심을 떠올리고, 함께 새로운 활동을 시도하세요. 여행, 취미, 데이트 코스를 다양하게 바꾸며 설렘을 유지하세요.'
        }
    ];
    
    return adviceData.map((advice, i) => `
        <div class="mb-4 p-5 bg-accent/5 rounded-lg slide-up" style="animation-delay: ${0.1 * i}s">
            <h5 class="font-bold text-accent mb-2">${advice.title}</h5>
            <p class="text-white/80 text-sm leading-relaxed">${advice.desc}</p>
        </div>
    `).join('');
}

