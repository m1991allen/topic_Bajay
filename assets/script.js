let vm = new Vue({
    el: '#app',
    data: {
        sitename: '民視新聞網',
        main1: '罷',
        main2: '捷',
        title: '投票2/6登場',
        subtitle: '開票、門檻一次看',
        arrow: '點我向下看',
        slogan: [
            { img1: './assets/images/右上.png', alt: 'slogan' },
            { img2: './assets/images/右下.png', alt: 'slogan' },
            { img3: './assets/images/左上.png', alt: 'slogan' },
            { img4: './assets/images/左下.png', alt: 'slogan' },
        ],

        list: [
            { item: '開票專區', link: '#ch1' },
            { item: '罷免程序', link: '#ch2' },
            { item: '罷免理由', link: '#ch3' },
            { item: '罷免門檻', link: '#ch4' },
            { item: '各方說法', link: '#ch5' },
            { item: '相關新聞', link: '#ch6' },
        ],

        banner: {
            url: './assets/images/banner_bg.jpg',
            mburl: './assets/images/banner_bg_mb.jpg',
            alt: '罷捷形象圖',
            person: './assets/images/huangjay.png',
            name: '高雄第九選區議員 / 黃捷',
        },

        logo: {
            url: './assets/images/logo_ftv.png',
            alt: '民視新聞網'
        },

        chapter1: {
            title: '開票專區',
            part: [
                '繼前高雄市長韓國瑜、桃園市議員王浩宇接連被罷免成功後，高雄市議員黃捷的罷免投票案，即將在2月6日登場。',
                '根據中選會表示，高雄市議會第3屆議員選舉第9選舉區，原選舉區選舉人總數28萬7829人，法定連署人人數應為2萬8783人以上。黃捷罷免案原連署人人數4萬1683人，符合規定人數3萬498人，不符合規定人數1萬1185人，已達法定連署人人數，因此依法由中選會宣告罷免案成立。'
            ],
            vote_agree: '未開票',
            vote_disagree: '未開票'
        },

        chapter2: {
            title: '罷免程序',
            dateScript: [
                { date: '2020年12月18日', script: '罷免案成立之宣告' },
                { date: '2021年1月30日', script: '辦理公辦電視罷免說明會' },
                { date: '2021年2月6日', script: '投票、開票' },
                { date: '2021年2月9日', script: '公告罷免投票結果' },
            ]
        },

        chapter3: {
            title: '罷免理由',
            script: '提議人之領銜人劉辰芳女士提出之罷免黃捷理由，包括：',
            part: [
                '「問政未盡議員之責」，稱黃捷任職以來未提案或關注鳳山市民民生疾苦之情事，是翻白眼作秀、問政無科學根據的「白目議員」。',
                '「問政內容扭曲事實、罔顧民意」，指黃捷違背其專業良知，為反對而反對。',
                '「以意識形態問政，行事風格兩套標準」，指控黃捷沒有是非對錯，只有顏色與政黨利益。',
                '「做人不厚道、沒有禮義廉恥，不足代表民意」，包括扭曲韓國瑜「說許崑源是狗熊」，以及赴許崑源靈堂抹大口紅。',
                '「違法介入港暴進行物資募集，對中態度嚴重雙標」，指黃捷募集物資助港違反國安法21條，影響國家安全甚巨。',
            ]
        },

        chapter4: {
            title: '罷免門檻',
            part: '根據《選罷法》第90條規定，罷免通過門檻必須同時符合兩條件，除了「有效同意票數多於不同意票」，且「同意票數須達原選舉區選舉人總數的四分之一以上」。根據高雄市選舉委員會公布選舉投票人數「29萬1566人」，有效同意票數除了要多於不同意票數，還要達到「7萬2892票」，罷免案才會通過，而黃捷上屆議員選舉得票數為1萬8420票。'
        },

        chapter5: {
            title: '各方說法',
            disagree: '│不同意罷免│',
            agree: '│同意罷免│',
            // 反對方
            disParty: [
                {
                    name: '高雄市議員 黃捷',
                    photo: './assets/images/pic_jay.png',
                    talk: '蕃薯不驚落土爛，被仇恨蒙蔽的言論與盲從報復的心理，不會將高雄擊垮。高雄從不畏懼做出選擇，相反的，投票是高雄人引以為傲的武器，曾經打過的光榮戰役，「2月6日，投下不同意票！做個驕傲勇敢的鳳山囡仔！'
                }, {
                    name: '民進黨',
                    photo: './assets/images/pic_mjt.png',
                    talk: '罷免黃捷毫無正當性，以黃捷支持香港做為罷免理由非常荒謬，黃捷表現認真，也獲得公民團體評鑑為高雄十大優質問政議員，民進黨非常肯定她的表現，民進黨會持續與當事人以及地方黨公職保持聯繫、積極配合、全力相挺，黨主席蔡英文也指示「要守住這場投票」。'
                }, {
                    name: '高雄市公民監督公僕聯盟',
                    photo: './assets/images/pic_kp.png',
                    talk: '若罷免的是不認真、不用功的議員，公督盟不會說話，但黃捷在議會期間質詢次數、法案提案數、問政議題種類都是第一名，是「認真問政的議員」，罷免團體做情緒性報復，不僅違反民主精神，也是濫用公民權。'
                }
            ],
            // 同意方
            agParty: [
                {
                    name: '罷捷領銜人 劉辰芳',
                    photo: './assets/images/pic_liu.png',
                    talk: '自己是罹癌的單親媽媽，不希望孩子為毒豬受苦，黃捷競選時承諾關心市民健康，卻沒把關食安，在市議會表決瘦肉精零檢出時落跑。'
                }, {
                    name: '罷捷團體發言人 徐尚賢',
                    photo: './assets/images/pic_yu.png',
                    talk: '黃捷連表決「瘦肉精零檢出」這麼重要的議題都可以落跑，還有臉說自己認真，面對落跑質疑還東躲西藏，不願正面回應，證明是不適任議員。罷免理由沒寫落跑，不代表黃捷能落跑，因為民代應該無時無刻接受人民檢視。'
                }, {
                    name: '中國國民黨高雄市黨部',
                    photo: './assets/images/pic_kmt.png',
                    talk: '國民黨反萊豬、反雙標、護食安，民進黨不顧民意，所以大家要對黃捷投下罷免同意票，代表對民進黨的不信任票。民進黨以為選贏就能為所欲為，才會隨便開放萊豬，這次不只罷免不適任民代，還要讓民進黨受人民監督。'
                }

            ],

        },

        chapter6: {
            title: '相關新聞',
            link: 'https://www.ftvnews.com.tw/tag/%E9%BB%83%E6%8D%B7/',
            target: '_blank'
        },

        mobile: true, // 切換手機版狀態
        menu: true, // 手機版漢堡選單按鈕狀態
        close: true, // 手機版漢堡選單關閉按鈕狀態
        scroll: false, // goToTop按鈕顯示狀態

    },

    mounted: function () {
        this.getAPI()
        this.handleResize()
        this.showGoToTop()

    },

    created: function () {
        window.addEventListener("resize", this.handleResize);
        window.addEventListener('scroll', this.showGoToTop);

    },

    destroyed: function () {
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener('scroll', this.showGoToTop);
    },


    methods: {
        getAPI() {
            //票數
            setInterval(() => {
                let vote_agree = document.querySelector('.vote_agree_bar');
                let vote_disagree = document.querySelector('.vote_disagree_bar');

                axios.get('https://www.ftvnews.com.tw/api/Vote0206.aspx')
                    .then(function (response) {
                        let data = response.data;
                        if (data.agree == 0 && data.disagree == 0) {
                            vote_agree.textContent = '未開票'
                            vote_disagree.textContent = '未開票'
                        }
                        else {
                            vote_agree.textContent = data.agree.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票';
                            vote_disagree.textContent = data.disagree.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '萬') + ' 票';
                            maxVote()
                        }
                        function maxVote() {
                            let agreebar = (data.agree / 100000 * 100).toFixed(2)
                            let diagreebar = (data.disagree / 100000 * 100).toFixed(2)

                            if (agreebar > 100) {
                                $(vote_agree).css('width', 100 + '%')
                            }
                            else {
                                $(vote_agree).css('width', agreebar + '%')
                            }

                            if (diagreebar > 100) {
                                $(vote_disagree).css('width', 100 + '%')
                            }
                            else {
                                $(vote_disagree).css('width', diagreebar + '%')
                            }

                        }

                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            }, 5000)
        },

        showMenu() {
            this.menu = true
            this.close = false
        },

        hideMenu() {
            this.menu = false
            this.close = true
        },

        showGoToTop() {
            if (window.scrollY < 100) {
                this.scroll = false
            } else {
                this.scroll = true

            }
        },

        handleScroll() {
            window.scrollTo(0, 0)
        },
        handleResize() {
            if (window.innerWidth > 998) {
                this.mobile = true
                this.menu = true
            } else {
                this.mobile = false
                this.menu = false
            }

        },
    },
})

