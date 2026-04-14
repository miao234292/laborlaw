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
    title: '职场维权挑战赛',
    description: '你已经学习了劳动法知识，现在来挑战一下，看看能否在模拟场景中正确维护自己的权益！',
    questions: [
        {
            id: 1,
            scenario: '你刚入职一家公司，HR让你签一份"自愿放弃社保"的协议，承诺每月多给你500元补贴。',
            options: [
                { text: '签吧，反正多拿钱，社保以后再说', isCorrect: false, feedback: '❌ 错误！社保是法定义务，不能自愿放弃。' },
                { text: '拒绝签署，要求公司依法缴纳社保', isCorrect: true, feedback: '✅ 正确！缴纳社保是用人单位的法定义务，不能通过协议免除。' },
                { text: '先签了，以后离职再要求补缴', isCorrect: false, feedback: '❌ 错误！即使签署了协议，也不能免除公司的法定义务。' }
            ]
        },
        {
            id: 2,
            scenario: '公司通知你试用期为6个月，期间工资只有转正后的70%，且暂不签劳动合同。',
            options: [
                { text: '接受，试用期长点可以多学习', isCorrect: false, feedback: '❌ 错误！试用期最长不超过6个月，且工资不得低于转正工资的80%，入职就应签订劳动合同。' },
                { text: '提出异议，要求缩短试用期并签订劳动合同', isCorrect: true, feedback: '✅ 正确！试用期最长6个月，工资不低于80%，且应在入职一个月内签订劳动合同。' },
                { text: '先干着，转正后再说', isCorrect: false, feedback: '❌ 错误！不及时签合同，公司应支付双倍工资。' }
            ]
        },
        {
            id: 3,
            scenario: '公司以"经营困难"为由要裁员，你在公司工作了2年3个月。',
            options: [
                { text: '接受裁员，拿一个月工资走人', isCorrect: false, feedback: '❌ 错误！工作2年3个月应获得2.5个月工资的经济补偿。' },
                { text: '要求公司支付2.5个月工资的经济补偿', isCorrect: true, feedback: '✅ 正确！每满一年支付一个月工资，不满半年按半年算，满半年不满一年按一年算。' },
                { text: '要求继续履行劳动合同', isCorrect: true, feedback: '✅ 正确！如果公司违法解除，你可以要求继续履行合同或获得赔偿金。' }
            ]
        },
        {
            id: 4,
            scenario: '公司要求你每天工作10小时，周末也要加班，但不支付加班费。',
            options: [
                { text: '为了保住工作，默默忍受', isCorrect: false, feedback: '❌ 错误！加班应支付加班费，且每日工作时间不得超过8小时。' },
                { text: '保留考勤记录，向劳动监察部门投诉', isCorrect: true, feedback: '✅ 正确！加班应支付1.5-3倍工资，可向劳动监察部门投诉或申请仲裁。' },
                { text: '直接辞职，不追究了', isCorrect: false, feedback: '❌ 错误！即使辞职也可以要求支付加班费。' }
            ]
        },
        {
            id: 5,
            scenario: '你在工作中受伤，公司说"你自己不小心，不算工伤"。',
            options: [
                { text: '自认倒霉，自己承担医药费', isCorrect: false, feedback: '❌ 错误！工作时间、工作场所内因工作原因受伤属于工伤。' },
                { text: '要求公司申请工伤认定，享受工伤保险待遇', isCorrect: true, feedback: '✅ 正确！公司应在30日内申请工伤认定，享受医疗待遇和伤残补助。' },
                { text: '先治疗，以后再说', isCorrect: false, feedback: '❌ 错误！工伤认定有1年的时效限制，应及时申请。' }
            ]
        }
    ]
};

// ===== 找茬游戏功能 =====
function startGame(jobId) {
    // 清除之前的计时器
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    gameState.isPlaying = true;
    gameState.currentJob = jobId;
    gameState.foundRisks = [];
    gameState.timeLeft = 60; // 游戏时间60秒
    gameState.score = 0;
    
    // 启用条款点击交互
    const jobDetail = document.getElementById('jobDetail');
    const job = jobData[jobId];
    if (jobDetail && job) {
        jobDetail.querySelectorAll('.job-item').forEach(item => {
            item.classList.add('clickable');
            item.addEventListener('click', function() {
                if (!gameState.isPlaying) return;
                
                const itemData = {
                    text: this.textContent.trim(),
                    isRisky: this.dataset.risk === 'true',
                    riskType: this.dataset.type,
                    riskDesc: getRiskDesc(this.textContent.trim(), job)
                };
                handleRiskClick(this, itemData);
            });
        });
    }
    
    // 隐藏开始按钮
    const startBtn = document.getElementById('startGameBtn');
    if (startBtn) {
        startBtn.style.display = 'none';
    }
    
    updateGameUI();
    startTimer();
}

function startTimer() {
    // 确保只有一个计时器在运行
    if (gameState.timer) {
        clearInterval(gameState.timer);
    }
    
    gameState.timer = setInterval(() => {
        if (gameState.timeLeft > 0) {
            gameState.timeLeft--;
            updateTimerDisplay();
        }
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timer);
            gameState.timer = null;
            endGame();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('gameTimer');
    if (timerEl) {
        // 防止显示负数
        const displayTime = Math.max(0, gameState.timeLeft);
        const minutes = Math.floor(displayTime / 60);
        const seconds = displayTime % 60;
        timerEl.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        if (displayTime <= 10) {
            timerEl.style.color = '#ef4444';
        } else {
            timerEl.style.color = '';
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
    
    // 检查是否已经找到过
    if (element.dataset.found === 'true') {
        showToast('已经找过这个了，继续找其他的！', 'info');
        return;
    }
    
    // 标记为已找到
    element.dataset.found = 'true';
    
    if (itemData.isRisky && itemData.riskType !== 'good') {
        // 找到风险点
        gameState.foundRisks.push(itemData.text);
        gameState.score += 10;
        element.classList.add('risky-found');
        showToast(`🎯 找到了！${itemData.riskDesc}`, 'success');
        
        showRiskAnalysis(itemData);
        
        updateGameUI();
        
        const job = jobData[gameState.currentJob];
        if (gameState.foundRisks.length >= job.riskCount) {
            setTimeout(() => endGame(true), 1500);
        }
    } else if (itemData.riskType === 'good') {
        // 找到合规点
        element.classList.add('good-found');
        showToast('✅ 这是合规的内容，不是风险点哦！', 'info');
    } else {
        // 普通条款（非风险）
        element.style.opacity = '0.5';
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
        toast.remove();
    }, 3000);
}

function endGame(completed = false) {
    // 清除计时器
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    gameState.isPlaying = false;
    
    const job = jobData[gameState.currentJob];
    const missedRisks = [];
    
    const allItems = [
        ...(job.duties || []),
        ...(job.requirements || []),
        ...(job.benefits || [])
    ];
    
    allItems.forEach(item => {
        if (item.isRisky && item.riskType !== 'good' && !gameState.foundRisks.includes(item.text)) {
            missedRisks.push(item);
        }
    });
    
    if (job.positionRisk && !gameState.foundRisks.includes(job.positionRisk.text)) {
        missedRisks.push(job.positionRisk);
    }
    
    let missedRisksHtml = '';
    if (missedRisks.length > 0) {
        missedRisksHtml = `
            <div class="missed-risks">
                <h5>😅 未找到的风险点：</h5>
                <ul>
                    ${missedRisks.map(r => `<li>${r.text} - ${r.riskDesc || '风险点'}</li>`).join('')}
                </ul>
            </div>
        `;
    }
    
    const resultDiv = document.getElementById('gameResult');
    if (resultDiv) {
        if (completed) {
            resultDiv.innerHTML = `
                <div class="game-result success">
                    <h4>🎉 恭喜！全部找出！</h4>
                    <p>得分: ${gameState.score}分 | 剩余时间: ${Math.max(0, gameState.timeLeft)}秒</p>
                    <p>你真是个细心的求职者！</p>
                    ${missedRisksHtml}
                    <button class="restart-btn" onclick="restartGame()">🔄 再玩一次</button>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <div class="game-result fail">
                    <h4>⏰ 时间到！</h4>
                    <p>找到了 ${gameState.foundRisks.length}/${job.riskCount} 个风险点</p>
                    ${missedRisksHtml}
                    <button class="restart-btn" onclick="restartGame()">🔄 再试一次</button>
                </div>
            `;
        }
        resultDiv.style.display = 'block';
    }
}

function restartGame() {
    const resultDiv = document.getElementById('gameResult');
    if (resultDiv) {
        resultDiv.style.display = 'none';
    }
    
    const analysisDiv = document.getElementById('riskAnalysis');
    if (analysisDiv) {
        analysisDiv.style.display = 'none';
    }
    
    // 清除所有高亮
    document.querySelectorAll('.found-risk').forEach(el => {
        el.classList.remove('found-risk');
    });
    
    startGame(gameState.currentJob);
}

function closeJobModal() {
    // 清除计时器
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    gameState.isPlaying = false;
    gameState.currentJob = null;
    
    const jobModal = document.getElementById('jobModal');
    if (jobModal) {
        jobModal.classList.remove('active');
    }
    
    document.body.style.overflow = '';
}

// ===== 环节三调解案例功能 =====
let discussionTimerInterval = null;

function showRoleContent(role, cardElement) {
    const data = mediationData[role];
    if (!data) return;
    
    const contentDiv = cardElement.querySelector('.role-content');
    if (!contentDiv) return;
    
    // 检查是否已经展开
    if (contentDiv.dataset.expanded === 'true') {
        // 收起
        contentDiv.innerHTML = `<p class="role-intro">点击展开${role === 'worker' ? '小王的主张' : role === 'company' ? '公司的辩解' : '调解意见'}</p>`;
        contentDiv.dataset.expanded = 'false';
        cardElement.classList.remove('expanded');
        return;
    }
    
    // 展开内容
    contentDiv.innerHTML = `
        <div class="role-points">
            ${data.points.map((point, index) => `
                <div class="role-point" style="animation: fadeInUp 0.3s ease ${index * 0.1}s both;">
                    <span class="point-number">${index + 1}</span>
                    <p>${point}</p>
                </div>
            `).join('')}
        </div>
    `;
    contentDiv.dataset.expanded = 'true';
    cardElement.classList.add('expanded');
    
    // 检查是否双方都展开了，如果是则开始讨论计时
    checkBothSidesExpanded();
}

function checkBothSidesExpanded() {
    const workerCard = document.querySelector('.role-card[data-role="worker"]');
    const companyCard = document.querySelector('.role-card[data-role="company"]');
    const mediatorCard = document.getElementById('mediatorCard');
    const discussionTimer = document.getElementById('discussionTimer');
    
    if (!workerCard || !companyCard || !mediatorCard) return;
    
    const workerExpanded = workerCard.querySelector('.role-content')?.dataset.expanded === 'true';
    const companyExpanded = companyCard.querySelector('.role-content')?.dataset.expanded === 'true';
    
    // 如果双方都展开了，且调解员卡片还没显示，开始计时
    if (workerExpanded && companyExpanded && mediatorCard.style.display === 'none' && !discussionTimerInterval) {
        startDiscussionTimer();
    }
}

function startDiscussionTimer() {
    const discussionTimer = document.getElementById('discussionTimer');
    const timerCountdown = document.getElementById('timerCountdown');
    
    if (discussionTimer) {
        discussionTimer.style.display = 'block';
        discussionTimer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    let timeLeft = 90; // 1分30秒 = 90秒
    
    discussionTimerInterval = setInterval(() => {
        timeLeft--;
        
        // 更新显示
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        if (timerCountdown) {
            timerCountdown.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }
        
        // 时间到
        if (timeLeft <= 0) {
            clearInterval(discussionTimerInterval);
            discussionTimerInterval = null;
            showMediatorCard();
        }
    }, 1000);
}

function showMediatorCard() {
    const mediatorCard = document.getElementById('mediatorCard');
    const discussionTimer = document.getElementById('discussionTimer');
    
    if (mediatorCard) {
        mediatorCard.style.display = 'block';
        // 添加动画效果
        mediatorCard.style.animation = 'fadeInUp 0.5s ease';
        mediatorCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // 更新计时器显示为完成状态
    if (discussionTimer) {
        discussionTimer.innerHTML = `
            <div class="timer-display" style="background: var(--success-color);">
                <span class="timer-icon">✅</span>
                <span class="timer-text">讨论时间结束</span>
                <span class="timer-countdown">00:00</span>
            </div>
            <p class="timer-hint">调解员意见已公布，请点击上方卡片查看。</p>
        `;
    }
}

function updateMediationSummary() {
    const summaryDiv = document.getElementById('mediationSummary');
    if (!summaryDiv) return;
    
    const expandedCards = document.querySelectorAll('.role-card.expanded');
    if (expandedCards.length === 3) {
        summaryDiv.innerHTML = `
            <h4>📝 案例总结</h4>
            <div class="summary-content">
                <p><strong>法律依据：</strong></p>
                <ul>
                    <li>《劳动合同法》第十条：建立劳动关系应当订立书面劳动合同</li>
                    <li>《劳动合同法》第八十二条：未签劳动合同应支付双倍工资</li>
                    <li>《劳动合同法》第四十七条：经济补偿按工作年限计算</li>
                    <li>《社会保险法》：用人单位必须依法缴纳社会保险</li>
                </ul>
                <p style="margin-top: 1rem;"><strong>维权途径：</strong>协商 → 调解 → 仲裁 → 诉讼</p>
            </div>
        `;
    }
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
                    <h4>职场情境</h4>
                    ${matchingGameData.scenarios.map(scenario => {
                        const isMatched = isScenarioMatched(scenario.id);
                        const matchedCount = getMatchedRightsCount(scenario.id);
                        const totalMatches = scenario.matchedRights.length;
                        const progressText = matchedCount > 0 ? ` (${matchedCount}/${totalMatches})` : '';
                        
                        return `
                            <div class="scenario-match-card ${matchingGameState.selectedScenario === scenario.id ? 'selected' : ''} ${isMatched ? 'matched' : ''}" 
                                 data-id="${scenario.id}"
                                 onclick="selectScenario('${scenario.id}')">
                                <div class="scenario-icon">${scenario.icon}</div>
                                <div class="scenario-info">
                                    <div class="scenario-title">${scenario.title}${progressText}</div>
                                    <div class="scenario-desc">${scenario.shortDesc}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div class="matching-arrow">
                    <span>➡️</span>
                </div>
                
                <div class="rights-column">
                    <h4>劳动权利</h4>
                    ${rightsToRender.map(right => {
                        const isMatched = matchingGameState.matchedPairs.some(p => p.right === right.id);
                        return `
                            <div class="right-match-card ${matchingGameState.selectedRight === right.id ? 'selected' : ''} ${isMatched ? 'matched' : ''}" 
                                 data-id="${right.id}"
                                 onclick="selectRight('${right.id}')">
                                <div class="right-icon">${right.icon}</div>
                                <div class="right-info">
                                    <div class="right-name">${right.name}</div>
                                    <div class="right-desc">${right.desc}</div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div id="matchingFeedback" class="matching-feedback"></div>
            
            ${matchingGameState.isComplete ? `
                <div class="matching-complete">
                    <h4>🎉 恭喜完成！</h4>
                    <p>最终得分: ${matchingGameState.score}分 | 尝试次数: ${matchingGameState.attempts}</p>
                    <button class="restart-btn" onclick="initMatchingGame()">🔄 再玩一次</button>
                </div>
            ` : ''}
        </div>
    `;
}

function isScenarioMatched(scenarioId) {
    const scenario = matchingGameData.scenarios.find(s => s.id === scenarioId);
    if (!scenario) return false;

    const matchedRightsForScenario = matchingGameState.matchedPairs
        .filter(p => p.scenario === scenarioId)
        .map(p => p.right);

    return scenario.matchedRights.every(r => matchedRightsForScenario.includes(r));
}

function getMatchedRightsCount(scenarioId) {
    return matchingGameState.matchedPairs.filter(p => p.scenario === scenarioId).length;
}

function selectScenario(scenarioId) {
    if (matchingGameState.isComplete) return;
    
    const scenario = matchingGameData.scenarios.find(s => s.id === scenarioId);
    if (isScenarioMatched(scenarioId)) {
        showMatchingFeedback('该情境已完成配对！', 'info');
        return;
    }
    
    matchingGameState.selectedScenario = scenarioId;
    renderMatchingGame();
    
    if (matchingGameState.selectedRight) {
        checkMatch();
    }
}

function selectRight(rightId) {
    if (matchingGameState.isComplete) return;
    
    if (matchingGameState.matchedPairs.some(p => p.right === rightId)) {
        showMatchingFeedback('该权利已被配对！', 'info');
        return;
    }
    
    matchingGameState.selectedRight = rightId;
    renderMatchingGame();
    
    if (matchingGameState.selectedScenario) {
        checkMatch();
    }
}

function checkMatch() {
    const { selectedScenario, selectedRight } = matchingGameState;
    
    if (!selectedScenario || !selectedRight) return;
    
    matchingGameState.attempts++;
    
    const scenario = matchingGameData.scenarios.find(s => s.id === selectedScenario);
    const isCorrect = scenario.matchedRights.includes(selectedRight);
    
    if (isCorrect) {
        matchingGameState.matchedPairs.push({
            scenario: selectedScenario,
            right: selectedRight
        });
        matchingGameState.score += 10;
        showMatchingFeedback('✅ 配对成功！', 'success');
        
        if (isScenarioMatched(selectedScenario)) {
            showMatchingFeedback(`🎉 情境${selectedScenario}完成！`, 'success');
        }
    } else {
        matchingGameState.score = Math.max(0, matchingGameState.score - 5);
        showMatchingFeedback('❌ 配对错误，再想想看！', 'error');
    }
    
    matchingGameState.selectedScenario = null;
    matchingGameState.selectedRight = null;
    
    const allMatched = matchingGameData.scenarios.every(s => isScenarioMatched(s.id));
    if (allMatched) {
        matchingGameState.isComplete = true;
    }
    
    renderMatchingGame();
}

function showMatchingFeedback(message, type) {
    const feedbackDiv = document.getElementById('matchingFeedback');
    if (feedbackDiv) {
        feedbackDiv.textContent = message;
        feedbackDiv.className = `matching-feedback ${type}`;
        
        setTimeout(() => {
            feedbackDiv.textContent = '';
            feedbackDiv.className = 'matching-feedback';
        }, 2000);
    }
}

// ===== 挑战赛功能 =====
let challengeState = {
    currentQuestion: 0,
    score: 0,
    answers: []
};

function initChallenge() {
    challengeState = {
        currentQuestion: 0,
        score: 0,
        answers: []
    };
    
    renderChallenge();
}

function renderChallenge() {
    const container = document.getElementById('challengeContainer');
    if (!container) return;
    
    if (challengeState.currentQuestion >= challengeData.questions.length) {
        showChallengeResult();
        return;
    }
    
    const question = challengeData.questions[challengeState.currentQuestion];
    
    container.innerHTML = `
        <div class="challenge-question">
            <div class="challenge-progress">
                问题 ${challengeState.currentQuestion + 1}/${challengeData.questions.length}
            </div>
            <h4>${question.scenario}</h4>
            <div class="challenge-options">
                ${question.options.map((option, index) => `
                    <button class="challenge-option" onclick="selectChallengeOption(${index})">
                        ${option.text}
                    </button>
                `).join('')}
            </div>
            <div id="challengeFeedback"></div>
        </div>
    `;
}

function selectChallengeOption(optionIndex) {
    const question = challengeData.questions[challengeState.currentQuestion];
    const selectedOption = question.options[optionIndex];
    
    challengeState.answers.push({
        question: challengeState.currentQuestion,
        selected: optionIndex,
        isCorrect: selectedOption.isCorrect
    });
    
    if (selectedOption.isCorrect) {
        challengeState.score += 20;
    }
    
    const feedbackDiv = document.getElementById('challengeFeedback');
    if (feedbackDiv) {
        feedbackDiv.innerHTML = `
            <div class="challenge-feedback ${selectedOption.isCorrect ? 'correct' : 'incorrect'}">
                <p>${selectedOption.feedback}</p>
                <button class="next-btn" onclick="nextChallengeQuestion()">
                    ${challengeState.currentQuestion < challengeData.questions.length - 1 ? '下一题 ➡️' : '查看结果 📊'}
                </button>
            </div>
        `;
    }
    
    document.querySelectorAll('.challenge-option').forEach((btn, index) => {
        btn.disabled = true;
        if (index === optionIndex) {
            btn.classList.add(selectedOption.isCorrect ? 'correct' : 'incorrect');
        }
    });
}

function nextChallengeQuestion() {
    challengeState.currentQuestion++;
    renderChallenge();
}

function showChallengeResult() {
    const container = document.getElementById('challengeContainer');
    if (!container) return;
    
    const percentage = (challengeState.score / (challengeData.questions.length * 20)) * 100;
    let level = '';
    let emoji = '';
    
    if (percentage >= 80) {
        level = '维权达人';
        emoji = '🏆';
    } else if (percentage >= 60) {
        level = '维权能手';
        emoji = '🥈';
    } else if (percentage >= 40) {
        level = '维权新手';
        emoji = '📚';
    } else {
        level = '需要加油';
        emoji = '💪';
    }
    
    container.innerHTML = `
        <div class="challenge-result">
            <h3>${emoji} 挑战完成！</h3>
            <div class="result-score">得分: ${challengeState.score}/${challengeData.questions.length * 20}</div>
            <div class="result-level">等级: ${level}</div>
            <div class="result-percentage">正确率: ${percentage.toFixed(0)}%</div>
            <button class="restart-btn" onclick="initChallenge()">🔄 再挑战一次</button>
        </div>
    `;
}

// ===== 页面初始化 =====
document.addEventListener('DOMContentLoaded', function() {
    // 初始化找茬游戏公司卡片
    const jobCardsContainer = document.getElementById('jobCards');
    if (jobCardsContainer) {
        jobCardsContainer.innerHTML = Object.entries(jobData).map(([id, job]) => `
            <div class="job-card" data-job-id="${id}">
                <div class="job-icon">${job.icon}</div>
                <div class="job-company">${job.company}</div>
                <div class="job-position">${job.position}</div>
                <button class="start-game-btn" onclick="openJobDetail(${id})">👀 查看详情</button>
            </div>
        `).join('');
    }
    
    // 初始化连连看游戏
    initMatchingGame();
    
    // 初始化挑战赛
    initChallenge();
    
    // 调解案例标签切换
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(tab)?.classList.add('active');
        });
    });
    
    // 环节三角色卡片点击事件
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('click', function() {
            const role = this.dataset.role;
            if (role && mediationData[role]) {
                showRoleContent(role, this);
            }
        });
    });
    
    // 模态框关闭事件
    const jobModal = document.getElementById('jobModal');
    jobModal?.addEventListener('click', (e) => {
        if (e.target === jobModal) {
            closeJobModal();
        }
    });
});

function openJobDetail(jobId) {
    const job = jobData[jobId];
    if (!job) return;
    
    const jobModal = document.getElementById('jobModal');
    const jobDetail = document.getElementById('jobDetail');
    
    if (!jobModal || !jobDetail) return;
    
    // 重置游戏状态
    gameState.isPlaying = false;
    gameState.currentJob = null;
    gameState.foundRisks = [];
    gameState.timeLeft = 60;
    gameState.score = 0;
    if (gameState.timer) {
        clearInterval(gameState.timer);
        gameState.timer = null;
    }
    
    jobDetail.innerHTML = `
        <div class="job-detail-header">
            <div class="job-detail-icon">${job.icon}</div>
            <div class="job-detail-title">
                <h3>${job.company}</h3>
                <p class="job-position">${job.position}</p>
            </div>
        </div>
        
        <div class="game-status-bar">
            <div class="game-timer" id="gameTimer">1:00</div>
            <div class="game-progress" id="gameProgress">已找到: 0/${job.riskCount}</div>
        </div>
        
        <div class="job-section">
            <h4>📋 岗位职责</h4>
            <ul class="job-list">
                ${job.duties.map(item => `
                    <li class="job-item" data-risk="${item.isRisky}" data-type="${item.riskType}" data-found="false">
                        ${item.text}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="job-section">
            <h4>📝 任职要求</h4>
            <ul class="job-list">
                ${job.requirements.map(item => `
                    <li class="job-item" data-risk="${item.isRisky}" data-type="${item.riskType}" data-found="false">
                        ${item.text}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="job-section">
            <h4>💼 福利待遇</h4>
            <ul class="job-list">
                ${job.benefits.map(item => `
                    <li class="job-item" data-risk="${item.isRisky}" data-type="${item.riskType}" data-found="false">
                        ${item.text}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div id="riskAnalysis" class="risk-analysis" style="display: none;"></div>
        <div id="gameResult" class="game-result" style="display: none;"></div>
        
        <div class="game-controls">
            <button class="start-game-btn" id="startGameBtn" onclick="startGame(${jobId})">🎮 开始找茬</button>
            <button class="close-modal-btn" onclick="closeJobModal()">❌ 关闭</button>
        </div>
    `;
    
    jobModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function getRiskDesc(text, job) {
    const allItems = [
        ...(job.duties || []),
        ...(job.requirements || []),
        ...(job.benefits || [])
    ];
    
    const item = allItems.find(i => i.text === text);
    return item?.riskDesc || '';
}
