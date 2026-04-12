// ===== Labor Law Course - Updated 2026-04-12 =====
// ===== Data =====
const jobData = {
    1: {
        company: '腾飞科技股份有限公司',
        position: '高级行政助理 (限女性)',
        icon: '🏢',
        duties: [
            { text: '协助总经理处理日常行政事务；', isRisky: false, riskType: '' },
            { text: '负责会议组织、文件管理；', isRisky: false, riskType: '' },
            { text: '公司对外联络与接待。', isRisky: false, riskType: '' }
        ],
        requirements: [
            { text: '本科及以上学历，形象气质佳；', isRisky: false, riskType: '' },
            { text: '年龄22-28岁，未婚优先考虑；', isRisky: true, riskType: 'discrimination', riskDesc: '年龄和婚姻状况歧视' },
            { text: '熟练使用办公软件，沟通能力强；', isRisky: false, riskType: '' },
            { text: '抗压能力强，能适应弹性工作时间。', isRisky: true, riskType: 'vague', riskDesc: '"弹性工作时间"可能规避加班费' }
        ],
        benefits: [
            { text: '月薪面议 (8000-12000元)；', isRisky: false, riskType: '' },
            { text: '五险一金齐全；', isRisky: false, riskType: '' },
            { text: '定期团建，提供下午茶；', isRisky: false, riskType: '' },
            { text: '广阔的职业发展空间。', isRisky: false, riskType: '' }
        ],
        positionRisk: { text: '高级行政助理 (限女性)', isRisky: true, riskType: 'discrimination', riskDesc: '性别歧视' },
        riskCount: 3
    },
    2: {
        company: '创新互联文化传媒有限公司',
        position: '业务拓展经理',
        icon: '🌐',
        duties: [
            { text: '负责公司产品或服务的市场推广与客户开发；', isRisky: false, riskType: '' },
            { text: '维护客户关系，完成销售目标；', isRisky: false, riskType: '' },
            { text: '拓展合作渠道，提升市场份额。', isRisky: false, riskType: '' }
        ],
        requirements: [
            { text: '热爱销售工作，有市场拓展经验者优先；', isRisky: false, riskType: '' },
            { text: '具备优秀的沟通能力和抗压能力；', isRisky: false, riskType: '' },
            { text: '拥有创业激情，敢于挑战高薪。', isRisky: false, riskType: '' }
        ],
        benefits: [
            { text: '高额提成，月入过万不是梦！无底薪，多劳多得。', isRisky: true, riskType: 'noSalary', riskDesc: '无底薪违反最低工资保障制度' },
            { text: '本公司实行"合伙人制度"，无需签订正式劳动合同，提供灵活合作模式。', isRisky: true, riskType: 'noContract', riskDesc: '不签劳动合同，逃避法定义务' },
            { text: '表现优异者可获得股权激励。', isRisky: false, riskType: '' }
        ],
        positionRisk: null,
        riskCount: 2
    },
    3: {
        company: '极速互娱网络科技有限公司',
        position: '高级运营主管',
        icon: '🎮',
        duties: [
            { text: '负责线上产品运营策略的制定与实施；', isRisky: false, riskType: '' },
            { text: '用户数据分析，持续优化产品体验；', isRisky: false, riskType: '' },
            { text: '团队管理与绩效考核。', isRisky: false, riskType: '' }
        ],
        requirements: [
            { text: '三年以上互联网产品运营经验；', isRisky: false, riskType: '' },
            { text: '熟悉用户心理，具备良好的数据分析能力；', isRisky: false, riskType: '' },
            { text: '能够承受较大工作压力，有奉献精神。', isRisky: true, riskType: 'moral', riskDesc: '"奉献精神"可能是道德绑架' }
        ],
        benefits: [
            { text: '月薪6000-8000元，试用期工资为转正工资的80%；', isRisky: false, riskType: '' },
            { text: '试用期6个月，表现优秀者可提前转正，最长可延长至12个月；', isRisky: true, riskType: 'longProbation', riskDesc: '试用期过长，违反法律规定' },
            { text: '工作时间弹性灵活，但需接受项目紧急情况下的无偿加班安排，以确保项目进度。', isRisky: true, riskType: 'unpaidOT', riskDesc: '无偿加班违反劳动法' },
            { text: '公司提供员工宿舍、餐补，有良好发展前景。', isRisky: false, riskType: '' }
        ],
        positionRisk: null,
        riskCount: 3
    },
    4: {
        company: '阳光未来教育科技有限公司',
        position: '市场营销专员',
        icon: '📚',
        duties: [
            { text: '协助市场部开展各项营销活动；', isRisky: false, riskType: '' },
            { text: '负责市场信息收集与分析；', isRisky: false, riskType: '' },
            { text: '社交媒体内容运营与维护。', isRisky: false, riskType: '' }
        ],
        requirements: [
            { text: '大专及以上学历，市场营销相关专业优先；', isRisky: false, riskType: '' },
            { text: '具备良好的学习能力和团队协作精神；', isRisky: false, riskType: '' },
            { text: '熟练使用办公软件及基础设计软件。', isRisky: false, riskType: '' }
        ],
        benefits: [
            { text: '月薪5000-7000元，提供年终奖金；', isRisky: false, riskType: '' },
            { text: '五险一金齐全；', isRisky: false, riskType: 'good', riskDesc: '合规：依法缴纳社保' },
            { text: '试用期2个月，期间薪资不低于转正工资的80%，签订正式劳动合同；', isRisky: false, riskType: 'good', riskDesc: '合规：试用期和合同规范' },
            { text: '周末双休，法定节假日休息，享受带薪年假；', isRisky: false, riskType: 'good', riskDesc: '合规：保障休息休假权' },
            { text: '定期团建，专业培训与晋升通道。', isRisky: false, riskType: '' }
        ],
        positionRisk: null,
        riskCount: 0,
        isGoodExample: true
    }
};

// 找茬游戏状态
let gameState = {
    isPlaying: false,
    currentJob: null,
    foundRisks: [],
    timer: null,
    timeLeft: 60,
    score: 0
};

// ===== 连连看配对游戏数据 =====
const matchingGameData = {
    scenarios: [
        {
            id: 'A',
            icon: '⏰',
            title: '情境A',
            shortDesc: '无偿加班',
            fullText: '小王是某公司的销售人员。公司规定，每月必须完成一定业绩，否则就要"自愿"无偿加班，直到完成任务。',
            matchedRights: ['rights_1', 'rights_2']
        },
        {
            id: 'B',
            icon: '🤕',
            title: '情境B',
            shortDesc: '工伤认定',
            fullText: '小李在工厂操作机器时手被划伤，公司却说这是他自己操作不当，不算工伤。',
            matchedRights: ['rights_3', 'rights_4']
        },
        {
            id: 'C',
            icon: '🏥',
            title: '情境C',
            shortDesc: '病假扣薪',
            fullText: '小张请病假休养，公司以"请假太多"为由扣发了他当月大部分工资。',
            matchedRights: ['rights_2', 'rights_5']
        },
        {
            id: 'D',
            icon: '💳',
            title: '情境D',
            shortDesc: '社保缴纳',
            fullText: '公司告诉小赵可以不缴社保，多给他几百块钱工资。',
            matchedRights: ['rights_6']
        }
    ],
    rights: [
        { id: 'rights_1', name: '劳动报酬权', icon: '💰', desc: '获得工资、加班费的权利' },
        { id: 'rights_2', name: '休息休假权', icon: '🏖️', desc: '享有法定节假日、年假、病假的权利' },
        { id: 'rights_3', name: '劳动安全卫生保护权', icon: '🛡️', desc: '获得安全工作环境、劳动保护的权利' },
        { id: 'rights_4', name: '获得工伤保险待遇权', icon: '🏥', desc: '工伤时获得医疗救治和经济补偿的权利' },
        { id: 'rights_5', name: '获得医疗期保障权', icon: '💊', desc: '患病或非因工负伤时获得医疗期保护的权利' },
        { id: 'rights_6', name: '获得社会保险待遇权', icon: '💳', desc: '享有养老、医疗、失业等社会保险的权利' }
    ]
};

// 连连看游戏状态
let matchingGameState = {
    selectedScenario: null,
    selectedRight: null,
    matchedPairs: [],
    score: 0,
    attempts: 0,
    isComplete: false,
    shuffledRights: null
};

const mediationData = {
    worker: {
        title: '劳动者小王的主张',
        points: [
            '公司未与我签订书面劳动合同，违反《劳动合同法》第十条',
            '公司未依法缴纳社会保险，侵犯我的社会保险权益',
            '公司无故辞退我，应当支付经济补偿金',
            '我在公司工作8个月，应获得1个月工资的经济补偿',
            '未签合同期间，公司应支付双倍工资差额'
        ]
    },
    company: {
        title: '用人单位的辩解',
        points: [
            '小王工作表现不佳，经常迟到早退',
            '公司经营困难，属于客观情况发生重大变化',
            '双方是口头约定，不存在正式的劳动关系',
            '已经按时足额支付了小王的工资',
            '额外给小王多发了几百元作为补偿'
        ]
    },
    mediator: {
        title: '劳动保障监察员的调解意见',
        points: [
            '根据考勤记录和工资发放记录，双方存在事实劳动关系',
            '未签劳动合同：公司应支付7个月的双倍工资差额',
            '未缴社保：公司必须补缴社会保险费',
            '违法解除：公司应支付2个月工资的赔偿金（工作不满1年按1年计算，违法解除双倍赔偿）',
            '建议双方协商解决，如协商不成，劳动者可申请劳动仲裁'
        ]
    }
};

const challengeData = {
    nopay: '公司拖欠工资怎么办？根据《劳动法》第五十条，工资应当以货币形式按月支付给劳动者本人，不得克扣或者无故拖欠劳动者的工资。',
    fired: '被无故开除怎么办？根据《劳动合同法》，用人单位解除劳动合同必须有法定理由，否则属于违法解除，应支付赔偿金。',
    overtime: '被迫加班怎么办？根据《劳动法》，加班需支付加班费，且每月加班不得超过36小时。劳动者有权拒绝违法加班要求。'
};

// ===== DOM Elements =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const challengeItems = document.querySelectorAll('.challenge-item');
const challengePopup = document.getElementById('challengePopup');
const popupClose = document.querySelector('.popup-close');
const popupText = document.querySelector('.popup-text');
const jobCards = document.querySelectorAll('.job-card');
const jobModal = document.getElementById('jobModal');
const modalClose = document.querySelector('.modal-close');
const modalBody = document.getElementById('modalBody');
const roleCards = document.querySelectorAll('.role-card');

// ===== Navigation =====
hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
});

// ===== Challenge Popup =====
challengeItems.forEach(item => {
    item.addEventListener('click', () => {
        const challenge = item.dataset.challenge;
        popupText.textContent = challengeData[challenge];
        challengePopup.classList.add('active');
    });
});

popupClose?.addEventListener('click', () => {
    challengePopup.classList.remove('active');
});

challengePopup?.addEventListener('click', (e) => {
    if (e.target === challengePopup) {
        challengePopup.classList.remove('active');
    }
});

// ===== 找茬游戏功能 =====
function startGame(jobId) {
    gameState.isPlaying = true;
    gameState.currentJob = jobId;
    gameState.foundRisks = [];
    gameState.timeLeft = 60;
    gameState.score = 0;
    
    updateGameUI();
    startTimer();
}

function startTimer() {
    gameState.timer = setInterval(() => {
        gameState.timeLeft--;
        updateTimerDisplay();
        
        if (gameState.timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('gameTimer');
    if (timerEl) {
        const minutes = Math.floor(gameState.timeLeft / 60);
        const seconds = gameState.timeLeft % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (gameState.timeLeft <= 10) {
            timerEl.style.color = '#ef4444';
        }
    }
}

function updateGameUI() {
    const job = jobData[gameState.currentJob];
    const progressEl = document.getElementById('gameProgress');
    if (progressEl) {
        progressEl.textContent = `已找到: ${gameState.foundRisks.length}/${job.riskCount}`;
    }
}

function handleRiskClick(element, itemData) {
    if (!gameState.isPlaying) return;
    
    if (gameState.foundRisks.includes(itemData.text)) {
        // 已经找过了
        showToast('已经找过这个了，继续找其他的！', 'info');
        return;
    }
    
    if (itemData.isRisky && itemData.riskType !== 'good') {
        // 找到了风险点
        gameState.foundRisks.push(itemData.text);
        gameState.score += 10;
        element.classList.add('found-risk');
        showToast(`🎯 找到了！${itemData.riskDesc}`, 'success');
        
        // 显示解析
        showRiskAnalysis(itemData);
        
        updateGameUI();
        
        // 检查是否找完了
        const job = jobData[gameState.currentJob];
        if (gameState.foundRisks.length >= job.riskCount) {
            setTimeout(() => endGame(true), 1500);
        }
    } else if (itemData.riskType === 'good') {
        // 这是合规的点
        showToast('✅ 这是合规的内容，不是风险点哦！', 'info');
    } else {
        // 点错了
        gameState.timeLeft = Math.max(0, gameState.timeLeft - 5);
        showToast('❌ 这不是风险点，时间-5秒！', 'error');
        updateTimerDisplay();
    }
}

function showRiskAnalysis(itemData) {
    const analysisDiv = document.getElementById('riskAnalysis');
    if (analysisDiv) {
        analysisDiv.innerHTML = `
            <div class="risk-found-box">
                <h5>🎯 发现风险点！</h5>
                <p><strong>问题条款：</strong>${itemData.text}</p>
                <p><strong>风险类型：</strong>${itemData.riskDesc}</p>
            </div>
        `;
        analysisDiv.style.display = 'block';
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `game-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

function endGame(completed = false) {
    clearInterval(gameState.timer);
    gameState.isPlaying = false;
    
    const job = jobData[gameState.currentJob];
    const missedRisks = [];
    
    // 收集未找到的风险点
    if (job.positionRisk && !gameState.foundRisks.includes(job.positionRisk.text)) {
        missedRisks.push(job.positionRisk);
    }
    job.requirements.forEach(r => {
        if (r.isRisky && !gameState.foundRisks.includes(r.text)) missedRisks.push(r);
    });
    job.benefits.forEach(b => {
        if (b.isRisky && !gameState.foundRisks.includes(b.text)) missedRisks.push(b);
    });
    
    // 显示结果
    showGameResult(completed, missedRisks);
}

function showGameResult(completed, missedRisks) {
    const job = jobData[gameState.currentJob];
    const resultDiv = document.getElementById('gameResult');
    
    let html = `
        <div class="game-result-box">
            <h3>${completed ? '🎉 恭喜通关！' : '⏰ 时间到！'}</h3>
            <div class="result-stats">
                <div class="stat">
                    <span class="stat-value">${gameState.foundRisks.length}</span>
                    <span class="stat-label">找到的风险点</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${job.riskCount}</span>
                    <span class="stat-label">总风险点数</span>
                </div>
                <div class="stat">
                    <span class="stat-value">${gameState.score}</span>
                    <span class="stat-label">得分</span>
                </div>
            </div>
    `;
    
    if (missedRisks.length > 0) {
        html += `
            <div class="missed-risks">
                <h4>🔍 你还没找到的风险点：</h4>
                <ul>
                    ${missedRisks.map(r => `<li>${r.text} - ${r.riskDesc}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    html += `
            <button class="restart-btn" onclick="restartGame()">🔄 再玩一次</button>
            <button class="close-game-btn" onclick="closeJobModal()">关闭</button>
        </div>
    `;
    
    resultDiv.innerHTML = html;
    resultDiv.style.display = 'block';
}

function restartGame() {
    document.getElementById('gameResult').style.display = 'none';
    document.getElementById('riskAnalysis').style.display = 'none';
    startGame(gameState.currentJob);
}

// ===== Job Modal with Game =====
function createJobModalContent(jobId) {
    const job = jobData[jobId];
    
    return `
        <div class="game-header">
            <div class="game-timer" id="gameTimer">1:00</div>
            <div class="game-progress" id="gameProgress">已找到: 0/${job.riskCount}</div>
            <button class="start-game-btn" onclick="startGame(${jobId})">🎮 开始找茬</button>
        </div>
        
        <div class="modal-header">
            <span class="company-icon">${job.icon}</span>
            <div>
                <h3>${job.company}</h3>
                ${renderClickablePosition(job)}
            </div>
        </div>
        
        <div class="game-instruction">
            <p>💡 <strong>游戏说明：</strong>点击招聘启事中可能存在法律风险的条款，找出所有${job.riskCount}个风险点！点错会扣5秒时间哦！</p>
        </div>
        
        <div class="job-detail-section">
            <h4>📋 岗位职责</h4>
            <ul>
                ${job.duties.map(duty => `<li>${duty.text}</li>`).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h4>🎯 任职要求</h4>
            <ul class="clickable-list">
                ${job.requirements.map(req => renderClickableItem(req)).join('')}
            </ul>
        </div>
        
        <div class="job-detail-section">
            <h4>💰 薪资福利</h4>
            <ul class="clickable-list">
                ${job.benefits.map(benefit => renderClickableItem(benefit)).join('')}
            </ul>
        </div>
        
        <div id="riskAnalysis" class="risk-analysis" style="display: none;"></div>
        <div id="gameResult" class="game-result" style="display: none;"></div>
    `;
}

function renderClickablePosition(job) {
    if (job.positionRisk) {
        return `<p class="position clickable-risk" data-risk='${JSON.stringify(job.positionRisk).replace(/'/g, "&#39;")}' onclick="handleRiskClick(this, ${JSON.stringify(job.positionRisk).replace(/"/g, '&quot;')})">${job.position} <span class="click-hint">👆 点击检查</span></p>`;
    }
    return `<p class="position">${job.position}</p>`;
}

function renderClickableItem(item) {
    return `<li class="clickable-item ${item.isRisky ? 'has-risk' : ''}" data-risk='${JSON.stringify(item).replace(/'/g, "&#39;")}' onclick="handleRiskClick(this, ${JSON.stringify(item).replace(/"/g, '&quot;')})">${item.text} <span class="click-hint">👆</span></li>`;
}

jobCards.forEach(card => {
    card.addEventListener('click', () => {
        const jobId = card.dataset.job;
        modalBody.innerHTML = createJobModalContent(jobId);
        jobModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

modalClose?.addEventListener('click', closeJobModal);

jobModal?.addEventListener('click', (e) => {
    if (e.target === jobModal) {
        closeJobModal();
    }
});

function closeJobModal() {
    clearInterval(gameState.timer);
    gameState.isPlaying = false;
    jobModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ===== 连连看配对游戏功能 =====
function initMatchingGame() {
    matchingGameState = {
        selectedScenario: null,
        selectedRight: null,
        matchedPairs: [],
        score: 0,
        attempts: 0,
        isComplete: false,
        shuffledRights: [...matchingGameData.rights].sort(() => Math.random() - 0.5)
    };

    renderMatchingGame();
}

function renderMatchingGame() {
    const container = document.getElementById('matchingGame');
    if (!container) return;

    // 使用已保存的打乱顺序，如果没有则创建
    const rightsToRender = matchingGameState.shuffledRights || matchingGameData.rights;

    container.innerHTML = `
        <div class="matching-game-container">
            <div class="matching-header">
                <div class="matching-score">得分: <span id="matchingScore">0</span></div>
                <div class="matching-attempts">尝试次数: <span id="matchingAttempts">0</span></div>
                <div class="matching-progress">进度: <span id="matchingProgress">0/4</span></div>
            </div>
            
            <div class="matching-instruction">
                <p>🎮 <strong>游戏说明：</strong>点击左侧的职场情境，再点击右侧对应的劳动权利进行配对。每个情境可能对应1-2个权利。</p>
            </div>
            
            <div class="matching-board">
                <div class="scenarios-column">
                    <h4>📋 职场情境</h4>
                    ${matchingGameData.scenarios.map(s => {
                        const matchedCount = getMatchedRightsCount(s.id);
                        const totalCount = s.matchedRights.length;
                        const isFullyMatched = matchedCount === totalCount;
                        return `
                        <div class="scenario-match-card ${isFullyMatched ? 'matched' : ''} ${matchingGameState.selectedScenario === s.id ? 'selected' : ''}" 
                             data-scenario="${s.id}" 
                             onclick="selectScenario('${s.id}')">
                            <div class="match-card-icon">${s.icon}</div>
                            <div class="match-card-content">
                                <div class="match-card-title">${s.title}</div>
                                <div class="match-card-desc">${s.shortDesc}</div>
                                <div class="match-progress">${matchedCount}/${totalCount}</div>
                            </div>
                            ${isFullyMatched ? '<div class="match-check">✓</div>' : ''}
                        </div>
                    `}).join('')}
                </div>
                
                <div class="matching-lines">
                    <svg id="matchingLines" width="100" height="400">
                        ${renderConnectionLines()}
                    </svg>
                </div>
                
                <div class="rights-column">
                    <h4>⚖️ 劳动权利</h4>
                    ${rightsToRender.map(r => `
                        <div class="right-match-card ${isRightMatched(r.id) ? 'matched' : ''} ${matchingGameState.selectedRight === r.id ? 'selected' : ''}" 
                             data-right="${r.id}" 
                             onclick="selectRight('${r.id}')">
                            <div class="match-card-icon">${r.icon}</div>
                            <div class="match-card-content">
                                <div class="match-card-title">${r.name}</div>
                                <div class="match-card-desc">${r.desc}</div>
                            </div>
                            ${isRightMatched(r.id) ? '<div class="match-check">✓</div>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div id="matchingResult" class="matching-result" style="display: none;"></div>
        </div>
    `;
}

function isScenarioMatched(scenarioId) {
    const scenario = matchingGameData.scenarios.find(s => s.id === scenarioId);
    if (!scenario) return false;

    // 检查该情境的所有对应权利是否都已被配对
    const matchedRightsForScenario = matchingGameState.matchedPairs
        .filter(p => p.scenario === scenarioId)
        .map(p => p.right);

    return scenario.matchedRights.every(r => matchedRightsForScenario.includes(r));
}

function getMatchedRightsCount(scenarioId) {
    return matchingGameState.matchedPairs.filter(p => p.scenario === scenarioId).length;
}

function isRightMatched(rightId) {
    return matchingGameState.matchedPairs.some(p => p.right === rightId);
}

function renderConnectionLines() {
    // 这里可以绘制连线，简化版先不实现
    return '';
}

function selectScenario(scenarioId) {
    if (matchingGameState.isComplete) return;
    if (isScenarioMatched(scenarioId)) return;
    
    // 取消之前的选择
    if (matchingGameState.selectedScenario === scenarioId) {
        matchingGameState.selectedScenario = null;
    } else {
        matchingGameState.selectedScenario = scenarioId;
    }
    
    renderMatchingGame();
    checkMatch();
}

function selectRight(rightId) {
    if (matchingGameState.isComplete) return;
    if (isRightMatched(rightId)) return;
    
    // 取消之前的选择
    if (matchingGameState.selectedRight === rightId) {
        matchingGameState.selectedRight = null;
    } else {
        matchingGameState.selectedRight = rightId;
    }
    
    renderMatchingGame();
    checkMatch();
}

function checkMatch() {
    const { selectedScenario, selectedRight } = matchingGameState;
    
    if (!selectedScenario || !selectedRight) return;
    
    matchingGameState.attempts++;
    
    const scenario = matchingGameData.scenarios.find(s => s.id === selectedScenario);
    const isCorrect = scenario.matchedRights.includes(selectedRight);
    
    if (isCorrect) {
        // 配对成功
        matchingGameState.matchedPairs.push({
            scenario: selectedScenario,
            right: selectedRight
        });
        matchingGameState.score += 10;
        
        showToast('🎉 配对成功！+10分', 'success');
        
        // 显示解析
        showMatchAnalysis(scenario, selectedRight);
        
        // 清除选择
        matchingGameState.selectedScenario = null;
        matchingGameState.selectedRight = null;
        
        // 检查是否完成
        if (matchingGameState.matchedPairs.length === 7) { // 总共7对配对
            setTimeout(() => showMatchingResult(), 1000);
        }
    } else {
        // 配对失败
        showToast('❌ 配对错误，请再想想！', 'error');
        
        // 清除选择
        matchingGameState.selectedScenario = null;
        matchingGameState.selectedRight = null;
    }
    
    updateMatchingUI();
    renderMatchingGame();
}

function showMatchAnalysis(scenario, rightId) {
    const right = matchingGameData.rights.find(r => r.id === rightId);
    const resultDiv = document.getElementById('matchingResult');
    
    resultDiv.innerHTML = `
        <div class="match-analysis-box">
            <h5>✅ 配对成功！</h5>
            <p><strong>情境：</strong>${scenario.shortDesc}</p>
            <p><strong>权利：</strong>${right.name}</p>
            <p class="match-reason">${getMatchReason(scenario.id, rightId)}</p>
        </div>
    `;
    resultDiv.style.display = 'block';
}

function getMatchReason(scenarioId, rightId) {
    const reasons = {
        'A_rights_1': '公司要求无偿加班，侵犯了劳动者获得加班费的权利。',
        'A_rights_2': '长期加班侵犯了劳动者的休息休假权。',
        'B_rights_3': '公司不提供安全的工作环境，侵犯了劳动安全卫生保护权。',
        'B_rights_4': '公司拒绝认定工伤，侵犯了获得工伤保险待遇的权利。',
        'C_rights_2': '公司扣发病假工资，侵犯了休息休假权。',
        'C_rights_5': '公司不承认医疗期，侵犯了获得医疗期保障权。',
        'D_rights_6': '公司不缴纳社保，侵犯了获得社会保险待遇权。'
    };
    return reasons[`${scenarioId}_${rightId}`] || '该情境涉及此项权利的侵犯。';
}

function updateMatchingUI() {
    const scoreEl = document.getElementById('matchingScore');
    const attemptsEl = document.getElementById('matchingAttempts');
    const progressEl = document.getElementById('matchingProgress');
    
    if (scoreEl) scoreEl.textContent = matchingGameState.score;
    if (attemptsEl) attemptsEl.textContent = matchingGameState.attempts;
    if (progressEl) progressEl.textContent = `${matchingGameState.matchedPairs.length}/7`;
}

function showMatchingResult() {
    matchingGameState.isComplete = true;
    
    const resultDiv = document.getElementById('matchingResult');
    resultDiv.innerHTML = `
        <div class="matching-final-result">
            <h3>🎊 恭喜完成所有配对！</h3>
            <div class="final-stats">
                <div class="final-stat">
                    <span class="final-value">${matchingGameState.score}</span>
                    <span class="final-label">总得分</span>
                </div>
                <div class="final-stat">
                    <span class="final-value">${matchingGameState.attempts}</span>
                    <span class="final-label">尝试次数</span>
                </div>
                <div class="final-stat">
                    <span class="final-value">${Math.round((7 / matchingGameState.attempts) * 100)}%</span>
                    <span class="final-label">正确率</span>
                </div>
            </div>
            <button class="restart-matching-btn" onclick="initMatchingGame()">🔄 再玩一次</button>
        </div>
    `;
    resultDiv.style.display = 'block';
}

// ===== Mediation Roles =====
let revealedRoles = new Set();

roleCards.forEach(card => {
    card.addEventListener('click', () => {
        const role = card.dataset.role;
        const contentDiv = card.querySelector('.role-content');
        const data = mediationData[role];
        
        // Toggle content
        if (contentDiv.querySelector('.role-details')) {
            contentDiv.innerHTML = '<p class="role-intro">点击展开' + 
                (role === 'worker' ? '小王的主张' : 
                 role === 'company' ? '公司的辩解' : '调解意见') + '</p>';
            card.classList.remove('active');
            revealedRoles.delete(role);
        } else {
            contentDiv.innerHTML = `
                <div class="role-details">
                    <h5>${data.title}</h5>
                    <ul>
                        ${data.points.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            `;
            card.classList.add('active');
            revealedRoles.add(role);
        }
        
        // Update summary if all roles revealed
        updateMediationSummary();
    });
});

function updateMediationSummary() {
    const summaryDiv = document.querySelector('.summary-content');
    
    if (revealedRoles.size === 3) {
        summaryDiv.innerHTML = `
            <div class="full-summary">
                <h5>📚 本案涉及的主要法律知识点</h5>
                <ul>
                    <li><strong>书面劳动合同：</strong>建立劳动关系应当订立书面劳动合同，超过一个月未签合同的，用人单位应支付双倍工资。</li>
                    <li><strong>社会保险：</strong>缴纳社保是法定义务，不能协商免除。未缴社保的，劳动者可要求补缴。</li>
                    <li><strong>违法解除赔偿：</strong>用人单位违法解除劳动合同，应按经济补偿标准的二倍支付赔偿金。</li>
                    <li><strong>维权途径：</strong>劳动争议可通过协商、调解、仲裁、诉讼等方式解决。劳动仲裁是诉讼的前置程序。</li>
                </ul>
                <h5>💡 给同学们的建议</h5>
                <ul>
                    <li>入职时务必签订书面劳动合同，并保留一份原件</li>
                    <li>关注社保缴纳情况，定期查询个人社保账户</li>
                    <li>保存好工资条、考勤记录等重要证据</li>
                    <li>遇到劳动纠纷，及时向劳动监察部门投诉或申请劳动仲裁</li>
                    <li>了解法律、善用法律，是维护自身权益的最佳方式</li>
                </ul>
            </div>
        `;
    } else {
        const remaining = 3 - revealedRoles.size;
        summaryDiv.innerHTML = `<p>已查看 ${revealedRoles.size}/3 个角色，还剩 ${remaining} 个角色待查看</p>`;
    }
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeJobModal();
        challengePopup.classList.remove('active');
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for fade-in animation
document.querySelectorAll('.job-card, .scenario-card, .role-card, .summary-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('劳动法课程网页已加载完成');
    
    // 初始化连连看游戏
    initMatchingGame();
});
