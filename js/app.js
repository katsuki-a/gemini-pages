const spotData = [
    { id: 1, name: "神奈川県立秦野戸川公園", area: "神奈川", purpose: ["ファミリー"], access: "車", pet: "一部可", cost: 1, facilities: 5, crowd: 3, description: "広大な公園内に整備された浅い水無川があり、家族連れに最適。大型遊具も隣接し、一日中楽しめる。トイレやおむつ替えシートも完備。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "無料", petDetail: "下流の指定エリアのみ可" },
    { id: 2, name: "夕やけ小やけふれあいの里", area: "東京", purpose: ["ファミリー"], access: "車", pet: "不可", cost: 3, facilities: 4, crowd: 3, description: "童謡のモデル地で、浅い北浅川が流れる。ポニー乗馬や動物とのふれあいも可能で、特に未就学児に人気。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "中", petDetail: "不可" },
    { id: 3, name: "ケニーズ・ファミリー・ビレッジ", area: "埼玉", purpose: ["ファミリー", "BBQ"], access: "車", pet: "不可", cost: 4, facilities: 5, crowd: 4, description: "ファミリー特化のキャンプ場。透明度の高い名栗川と、夏期限定の天然プールが魅力。設備が清潔で初心者も安心。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "中〜高", petDetail: "一部サイト可" },
    { id: 4, name: "釜の淵公園", area: "東京", purpose: ["ファミリー", "アクセス"], access: "電車", pet: "可", cost: 1, facilities: 2, crowd: 4, description: "青梅駅から徒歩圏内。浅瀬から大人の腰ほどの深さまであり、幅広い年齢の子どもに対応。無料で予約不要なのが嬉しい。", accessDetail: "◎駅から徒歩圏内 / ○ICから近い", costDetail: "無料", petDetail: "可（リード必須）" },
    { id: 5, name: "秋川橋河川公園BBQランド", area: "東京", purpose: ["BBQ"], access: "車", pet: "不可", cost: 3, facilities: 3, crowd: 5, description: "秋川渓谷最大級のBBQ場。予約不要だが週末は超混雑。機材レンタルが必須で、食材を持ち込むスタイル。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "中", petDetail: "不可" },
    { id: 6, name: "飯能河原", area: "埼玉", purpose: ["BBQ", "アクセス"], access: "電車", pet: "可", cost: 2, facilities: 2, crowd: 5, description: "飯能駅から徒歩15分とアクセス抜群。広々とした河原で、有料の火気使用エリアでBBQが楽しめる。非常に混雑する。", accessDetail: "◎駅から徒歩圏内 / ◎ICから近い", costDetail: "低", petDetail: "可" },
    { id: 7, name: "ウォーターパーク長瀞", area: "埼玉", purpose: ["アドベンチャー", "BBQ"], access: "電車", pet: "一部可", cost: 4, facilities: 5, crowd: 5, description: "ラフティングなどアクティビティの拠点。キャンプ、BBQ、釣りが楽しめる総合施設。駅からも近く便利。", accessDetail: "◎駅から徒歩圏内 / ◎ICから近い", costDetail: "高", petDetail: "一部サイト可" },
    { id: 8, name: "奥多摩（御岳渓谷）", area: "東京", purpose: ["アドベンチャー", "アクセス"], access: "電車", pet: "可", cost: 4, facilities: 4, crowd: 4, description: "御嶽駅すぐ。カヌーやSUPの聖地。名水百選の清流と渓谷美が魅力だが、流れが速く遊泳には不向き。", accessDetail: "◎駅から徒歩圏内 / ○ICから近い", costDetail: "中〜高", petDetail: "可（遊歩道）" },
    { id: 9, name: "氷川キャンプ場", area: "東京", purpose: ["アクセス", "キャンプ"], access: "電車", pet: "不可", cost: 3, facilities: 4, crowd: 4, description: "奥多摩駅から徒歩5分という驚異のアクセス。河原での直火が許可されており、本格キャンプが手軽に楽しめる。", accessDetail: "◎駅から徒歩圏内 / ○ICから近い", costDetail: "中", petDetail: "不可" },
    { id: 10, name: "青野原野呂ロッジキャンプ場", area: "神奈川", purpose: ["ペット", "キャンプ"], access: "車", pet: "可", cost: 3, facilities: 3, crowd: 3, description: "道志川沿いの景観が圧巻のキャンプ場。直火OK。エメラルドグリーンの川で本格的な自然を満喫できる。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "中", petDetail: "可" },
    { id: 11, name: "木の俣渓谷", area: "栃木", purpose: ["隠れ家", "絶景"], access: "車", pet: "可", cost: 1, facilities: 1, crowd: 2, description: "ラムネ色と称される驚異的な透明度の清流。都心から距離があるため比較的空いているが、近年人気上昇中。", accessDetail: "×車必須 / ◎ICから近い", costDetail: "無料", petDetail: "可" },
    { id: 12, name: "深澤渓 自然人村", area: "東京", purpose: ["隠れ家", "BBQ"], access: "車", pet: "不可", cost: 4, facilities: 3, crowd: 1, description: "完全予約制でプライベート感満載。施設の利用者しか入れない浅い小川で、静かに自然と向き合える。", accessDetail: "△バス乗り継ぎ / ◎ICから近い", costDetail: "高", petDetail: "不可" },
    { id: 13, name: "神流川", area: "群馬", purpose: ["隠れ家", "絶景"], access: "車", pet: "可", cost: 1, facilities: 2, crowd: 2, description: "「関東一きれいな川」に何度も選ばれた清流。上野村周辺は流れが穏やかで家族向け。広大な流域で穴場を探す楽しみも。", accessDetail: "×車必須 / ○ICから遠い", costDetail: "無料", petDetail: "可" },
];

const safetyData = {
    gear: {
        title: "必須の装備",
        icon: "👕",
        content: `
            <ul class="space-y-4">
                <li class="flex items-start"><span class="text-2xl mr-3">👟</span><div><strong class="text-blue-600">ウォーターシューズ:</strong> 川底の石は滑りやすく危険。かかとが固定され、つま先が保護されている靴は必須です。ビーチサンダルは厳禁。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🥋</span><div><strong class="text-blue-600">ラッシュガード:</strong> 強い紫外線や擦り傷から肌を守ります。水温が低い場所では低体温症の予防にもなります。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🦺</span><div><strong class="text-blue-600">ライフジャケット:</strong> 最も重要な安全装備。泳ぎの得意不得意に関わらず、特に子どもは必ず着用してください。急な深みや流れから命を守ります。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🧴</span><div><strong class="text-blue-600">その他:</strong> 日焼け止め、帽子、虫除け、救急セット、十分な飲み物、ゴミ袋も忘れずに。</div></li>
            </ul>
        `
    },
    risks: {
        title: "川の危険性",
        icon: "⚠️",
        content: `
            <ul class="space-y-4">
                <li class="flex items-start"><span class="text-2xl mr-3">🌊</span><div><strong class="text-blue-600">流れと深さの急変:</strong> 岸辺は浅くても、一歩先は急に深くなっていることがあります。穏やかに見えても中心の流れは強いです。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">⛈️</span><div><strong class="text-blue-600">天候の急変と鉄砲水:</strong> 上流の豪雨で水位が急上昇することがあります。現地の天気だけでなく、上流域の気象情報も確認し、サイレンが聞こえたら即座に避難してください。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🥶</span><div><strong class="text-blue-600">低体温症:</strong> 山の川は真夏でも水温が低いです。唇が紫色になったり震えが止まらなくなったら、すぐに水から上がり体を温めましょう。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🦦</span><div><strong class="text-blue-600">もし流されたら:</strong> パニックにならず「背浮き（ラッコ浮き）」を。大の字で仰向けになり、足を下流に向けて流されることで呼吸を確保します。</div></li>
            </ul>
        `
    },
    manners: {
        title: "マナーと配慮",
        icon: "💖",
        content: `
            <ul class="space-y-4">
                <li class="flex items-start"><span class="text-2xl mr-3">🗑️</span><div><strong class="text-blue-600">ゴミは必ず持ち帰る:</strong> 「来た時よりも美しく」が基本です。BBQの炭や食べ残しも含め、全て持ち帰りましょう。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🔥</span><div><strong class="text-blue-600">直火のルールを守る:</strong> ほとんどの場所で直火は禁止です。許可された場所以外では必ずBBQコンロを使い、後始末も完璧に。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🔊</span><div><strong class="text-blue-600">騒音への配慮:</strong> 大音量の音楽は迷惑になります。静かな自然を楽しみに来ている人もいることを忘れずに。</div></li>
                <li class="flex items-start"><span class="text-2xl mr-3">🧼</span><div><strong class="text-blue-600">環境への配慮:</strong> 川で食器や網を洗うのは水質汚染の原因になります。洗剤や油を流すのは絶対にやめましょう。</div></li>
            </ul>
        `
    }
};

let currentFilters = {
    purpose: 'all',
    area: 'all',
    access: 'all',
    pet: 'all'
};
let currentSort = 'crowd_asc';
let comparisonChart = null;
let comparisonList = new Set();

document.addEventListener('DOMContentLoaded', () => {
    // These functions will only run if the DOM elements exist.
    // This is fine for the main app, but for testing, we will call the logic functions directly.
    if (document.getElementById('purpose-filters')) {
        setupFilters();
        setupSort();
        setupSafetyTabs();
        renderSpots();

        document.getElementById('access-filter').addEventListener('change', (e) => {
            currentFilters.access = e.target.value;
            renderSpots();
        });
        document.getElementById('pet-filter').addEventListener('change', (e) => {
            currentFilters.pet = e.target.value;
            renderSpots();
        });
        document.getElementById('sort-order').addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderSpots();
        });
    }
});

function setupFilters() {
    const purposeFiltersContainer = document.getElementById('purpose-filters');
    const areaFiltersContainer = document.getElementById('area-filters');
    const accessFilterSelect = document.getElementById('access-filter');
    const petFilterSelect = document.getElementById('pet-filter');

    const purposes = ['all', ...new Set(spotData.flatMap(s => s.purpose))];
    const areas = ['all', ...new Set(spotData.map(s => s.area))];
    const accesses = ['all', '電車', '車'];
    const pets = ['all', '可', '一部可', '不可'];

    const purposeLabels = { all: 'すべて', 'ファミリー': '👨‍👩‍👧‍👦 ファミリー', 'BBQ': '🍖 BBQ', 'アドベンチャー': '🚣 アドベンチャー', 'アクセス': '🚆 アクセス重視', 'キャンプ': '⛺ キャンプ', 'ペット': '🐾 ペットと', '隠れ家': '🤫 隠れ家', '絶景': '🏞️ 絶景' };
    const areaLabels = { all: 'すべて', '東京': '東京', '埼玉': '埼玉', '神奈川': '神奈川', '栃木': '栃木', '群馬': '群馬' };
    const accessLabels = { all: 'すべて', '電車': '電車で行ける', '車': '車が便利' };
    const petLabels = { all: 'すべて', '可': '同伴可', '一部可': '一部可', '不可': '同伴不可' };

    purposes.forEach(p => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn px-4 py-2 text-sm font-medium rounded-full transition duration-300 border border-gray-300 hover:bg-blue-100';
        btn.textContent = purposeLabels[p];
        btn.dataset.filter = p;
        if (p === 'all') btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentFilters.purpose = p;
            document.querySelectorAll('#purpose-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSpots();
        });
        purposeFiltersContainer.appendChild(btn);
    });

    areas.forEach(a => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn px-4 py-2 text-sm font-medium rounded-full transition duration-300 border border-gray-300 hover:bg-blue-100';
        btn.textContent = areaLabels[a];
        btn.dataset.filter = a;
        if (a === 'all') btn.classList.add('active');
        btn.addEventListener('click', () => {
            currentFilters.area = a;
            document.querySelectorAll('#area-filters .filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderSpots();
        });
        areaFiltersContainer.appendChild(btn);
    });

    accesses.forEach(val => accessFilterSelect.innerHTML += `<option value="${val}">${accessLabels[val]}</option>`);
    pets.forEach(val => petFilterSelect.innerHTML += `<option value="${val}">${petLabels[val]}</option>`);
}

function setupSort() {
    const sortSelect = document.getElementById('sort-order');
    const sortOptions = {
        'crowd_asc': '混雑度が低い順',
        'cost_asc': '料金が安い順',
        'facilities_desc': '施設の充実度順',
    };
    Object.entries(sortOptions).forEach(([value, text]) => {
        sortSelect.innerHTML += `<option value="${value}">${text}</option>`;
    });
}

function setupSafetyTabs() {
    const tabsContainer = document.getElementById('safety-tabs');
    const contentContainer = document.getElementById('safety-content');

    Object.entries(safetyData).forEach(([key, data], index) => {
        const tab = document.createElement('a');
        tab.href = '#';
        tab.dataset.key = key;
        tab.className = `whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition duration-300 ${index === 0 ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`;
        tab.innerHTML = `<span class="mr-2">${data.icon}</span>${data.title}`;
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('#safety-tabs a').forEach(t => {
                t.classList.remove('border-blue-500', 'text-blue-600');
                t.classList.add('border-transparent', 'text-gray-500', 'hover:text-gray-700', 'hover:border-gray-300');
            });
            tab.classList.add('border-blue-500', 'text-blue-600');
            tab.classList.remove('border-transparent', 'text-gray-500');
            contentContainer.innerHTML = safetyData[key].content;
        });
        tabsContainer.appendChild(tab);
    });
    contentContainer.innerHTML = safetyData.gear.content;
}

function getFilteredAndSortedSpots() {
    let filteredSpots = spotData.filter(spot => {
        const purposeMatch = currentFilters.purpose === 'all' || spot.purpose.includes(currentFilters.purpose);
        const areaMatch = currentFilters.area === 'all' || spot.area === currentFilters.area;
        const accessMatch = currentFilters.access === 'all' || spot.access === currentFilters.access;
        const petMatch = currentFilters.pet === 'all' || spot.pet === currentFilters.pet;
        return purposeMatch && areaMatch && accessMatch && petMatch;
    });

    return filteredSpots.sort((a, b) => {
        switch (currentSort) {
            case 'cost_asc': return a.cost - b.cost;
            case 'facilities_desc': return b.facilities - a.facilities;
            case 'crowd_asc':
            default:
                return a.crowd - b.crowd;
        }
    });
}

function renderSpots() {
    const grid = document.getElementById('spots-grid');
    grid.innerHTML = '';

    const filteredSpots = getFilteredAndSortedSpots();

    document.getElementById('results-count').textContent = `${filteredSpots.length}件見つかりました`;

    if (filteredSpots.length === 0) {
        grid.innerHTML = `<p class="text-gray-600 col-span-full text-center">条件に合うスポットが見つかりませんでした。フィルターを変更してみてください。</p>`;
        return;
    }

    filteredSpots.forEach((spot, index) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col card-enter';
        card.style.animationDelay = `${index * 50}ms`;

        const costIcons = '¥'.repeat(spot.cost) + '<span class="text-gray-300">' + '¥'.repeat(5 - spot.cost) + '</span>';
        const facilityIcons = '★'.repeat(spot.facilities) + '<span class="text-gray-300">' + '☆'.repeat(5 - spot.facilities) + '</span>';
        const crowdIcons = '👤'.repeat(spot.crowd) + '<span class="text-gray-300">' + '👤'.repeat(5 - spot.crowd) + '</span>';

        card.innerHTML = `
            <div class="p-6 flex-grow">
                <div class="flex justify-between items-start">
                    <p class="text-sm font-semibold text-blue-600">${spot.area}</p>
                    <div class="flex items-center">
                        <input type="checkbox" id="compare-${spot.id}" class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" ${comparisonList.has(spot.id) ? 'checked' : ''}>
                        <label for="compare-${spot.id}" class="ml-2 text-sm text-gray-600">比較する</label>
                    </div>
                </div>
                <h4 class="text-xl font-bold mt-1 mb-2 text-gray-800">${spot.name}</h4>
                <p class="text-gray-600 text-sm mb-4 h-16">${spot.description}</p>
                <div class="space-y-2 text-sm">
                    <div class="flex justify-between"><span>料金目安:</span> <span class="font-mono">${costIcons}</span></div>
                    <div class="flex justify-between"><span>施設の充実度:</span> <span class="font-mono">${facilityIcons}</span></div>
                    <div class="flex justify-between"><span>混雑度:</span> <span class="font-mono">${crowdIcons}</span></div>
                    <div class="flex justify-between"><span>アクセス:</span> <span>${spot.accessDetail}</span></div>
                    <div class="flex justify-between"><span>ペット:</span> <span>${spot.petDetail}</span></div>
                </div>
            </div>
            <div class="px-6 py-3 bg-gray-50">
                <div class="flex flex-wrap gap-2">
                    ${spot.purpose.map(p => `<span class="text-xs font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded-full">${p}</span>`).join('')}
                </div>
            </div>
        `;
        grid.appendChild(card);

        card.querySelector(`#compare-${spot.id}`).addEventListener('change', (e) => {
            if (e.target.checked) {
                comparisonList.add(spot.id);
            } else {
                comparisonList.delete(spot.id);
            }
            renderComparisonChart();
        });
    });
}

function renderComparisonChart() {
    const chartSection = document.getElementById('comparison-chart-section');
    if (comparisonList.size < 2) {
        chartSection.classList.add('hidden');
        return;
    }
    chartSection.classList.remove('hidden');

    const ctx = document.getElementById('comparisonChart').getContext('2d');
    const labels = ['料金(安)', '施設充実', '空き具合', 'アクセス(電車)', 'ペットフレンドリー'];

    const datasets = Array.from(comparisonList).map(id => {
        const spot = spotData.find(s => s.id === id);
        const color = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 155) + 100}, ${Math.floor(Math.random() * 200) + 55}, 0.7)`;
        return {
            label: spot.name,
            data: [
                6 - spot.cost,
                spot.facilities,
                6 - spot.crowd,
                spot.access === '電車' ? 5 : 1,
                spot.pet === '可' ? 5 : (spot.pet === '一部可' ? 3 : 1)
            ],
            backgroundColor: color.replace('0.7', '0.2'),
            borderColor: color,
            pointBackgroundColor: color,
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: color
        };
    });

    if (comparisonChart) {
        comparisonChart.destroy();
    }

    comparisonChart = new Chart(ctx, {
        type: 'radar',
        data: { labels, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    suggestedMax: 5,
                    pointLabels: {
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.r !== null) {
                                label += context.parsed.r;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}
