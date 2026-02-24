

        const config = {
            f1: { title: "👑 女主角 1", gender: 'f', color: 'orange' },
            f2: { title: "🌸 女主角 2", gender: 'f', color: 'pink' },
            m1: { title: "🔥 男主角 1", gender: 'm', color: 'blue' },
            m2: { title: "🐺 男主角 2", gender: 'm', color: 'indigo' }
        };

        // 建立單一下拉選單的 HTML
        function buildSelect(idPrefix, key, dbKey) {
            let options = DB[dbKey].map(opt => `<option value="${opt.en}" data-zh="${opt.zh}">${opt.zh}</option>`).join('');
            return `<select id="${idPrefix}_${key}" class="mb-3">${options}</select>`;
        }

        // 初始化所有面板
        function initPanels() {
            try {
                console.log("Initializing Alita Director V8.0...");
                const container = document.getElementById('characters-container');
                if (!container) throw new Error("Container #characters-container not found");
                
                container.innerHTML = ''; // Clear container
                
                // 建立角色面板
                ['f1', 'f2', 'm1', 'm2'].forEach(id => {
                    const c = config[id];
                    const g = c.gender;
                    const html = `
                        <div id="panel_${id}" class="char-panel glass p-5 border-t-4 border-${c.color}-500">
                            <h3 class="text-${c.color}-400 font-black mb-4 text-lg border-b border-gray-700 pb-2">${c.title}</h3>
                            <div class="grid grid-cols-2 gap-3">
                                <div><span class="section-label">年齡</span>${buildSelect(id, 'age', 'age')}</div>
                                <div><span class="section-label">人種</span>${buildSelect(id, 'eth', 'ethnicity')}</div>
                            </div>
                            <div><span class="section-label">容貌風格</span>${buildSelect(id, 'face', g+'_face')}</div>
                            <div><span class="section-label">身形比例</span>${buildSelect(id, 'body', g+'_body')}</div>
                            <div><span class="section-label">服裝設定</span>${buildSelect(id, 'outfit', g+'_outfit')}</div>
                            <div class="grid grid-cols-2 gap-3">
                                <div><span class="section-label">動作姿態</span>${buildSelect(id, 'pose', 'pose')}</div>
                                <div><span class="section-label">神情</span>${buildSelect(id, 'exp', 'exp')}</div>
                            </div>
                        </div>
                    `;
                    container.innerHTML += html;
                });

                // 建立全局面板
                document.getElementById('global-env').innerHTML = `
                    <span class="section-label">場景大百科</span>${buildSelect('global', 'scene', 'scene')}
                `;
                document.getElementById('global-lens').innerHTML = `
                    <span class="section-label">光影技術</span>${buildSelect('global', 'light', 'light')}
                    <span class="section-label mt-3">相機規格</span>${buildSelect('global', 'cam', 'camera')}
                `;

                // 預設顯示有勾選的面板
                ['f1', 'f2', 'm1', 'm2'].forEach(id => togglePanel(id));
                console.log("Initialization complete!");
            } catch (err) {
                console.error("Initialization failed:", err);
                alert("初始化失敗: " + err.message);
            }
        }

        // 切換面板顯示
        function randomize() {
            const dice = document.querySelector(".fa-dice");
            dice.style.transition = "transform 0.5s ease";
            dice.style.transform = `rotate(${Math.random() * 360 + 360}deg)`;

            // 1. 先隨機決定一個 "主題風格" (0: 一般真實, 1: 賽博龐克, 2: 奇幻, 3: 復古, 4: 暗黑哥德)
            const theme = Math.floor(Math.random() * 5);
            
            // 2. 設定場景、光影、相機 (根據主題給予較高的權重)
            const sceneSelect = document.getElementById("global_scene");
            const lightSelect = document.getElementById("global_light");
            const camSelect = document.getElementById("global_cam");
            
            let sceneIdx = Math.floor(Math.random() * sceneSelect.options.length);
            let lightIdx = Math.floor(Math.random() * lightSelect.options.length);
            let camIdx = Math.floor(Math.random() * camSelect.options.length);
            
            if (theme === 1) { // 賽博龐克
                sceneIdx = [16, 17].includes(sceneIdx) ? sceneIdx : 17; // 偏向賽博街頭
                lightIdx = 10; // Cyberpunk neon
            } else if (theme === 2) { // 奇幻
                sceneIdx = Math.floor(Math.random() * 10) + 20; // 偏向最後10個奇幻場景
                lightIdx = 19; // Golden sparkles
            } else if (theme === 3) { // 復古
                sceneIdx = 10; // nostalgic classroom
                camIdx = [1, 7, 8][Math.floor(Math.random()*3)]; // Leica, Disposable, Polaroid
            } else if (theme === 4) { // 暗黑哥德
                sceneIdx = 13; // abandoned church
                lightIdx = 7; // Moonlight
            }
            
            sceneSelect.selectedIndex = sceneIdx;
            lightSelect.selectedIndex = lightIdx;
            camSelect.selectedIndex = camIdx;
            
            [sceneSelect, lightSelect, camSelect].forEach(el => blink(el));

            // 3. 處理人物屬性
            const activeIds = ["f1", "f2", "m1", "m2"].filter(id => document.getElementById(`chk_${id}`).checked);
            activeIds.forEach(id => {
                const keys = ["age", "eth", "face", "body", "outfit", "pose", "exp"];
                keys.forEach(k => {
                    const el = document.getElementById(`${id}_${k}`);
                    if(el) {
                        let idx = Math.floor(Math.random() * el.options.length);
                        // 如果是賽博龐克主題，臉部或服裝盡量挑選科技感
                        if(theme === 1 && k === "face" && el.options.length > 4) idx = 4;
                        if(theme === 1 && k === "outfit" && el.options.length > 8) idx = 8;
                        // 奇幻主題
                        if(theme === 2 && k === "face" && id.startsWith("f") && el.options.length > 9) idx = 9; // elf
                        if(theme === 2 && k === "outfit" && id.startsWith("m") && el.options.length > 13) idx = 13; // wizard
                        
                        el.selectedIndex = idx;
                        blink(el);
                    }
                });
            });

            setTimeout(generate, 300);
        }

        function blink(el) {
            el.style.borderColor = "#6366f1";
            el.style.boxShadow = "0 0 15px rgba(99, 102, 241, 0.4)";
            setTimeout(() => { el.style.borderColor = ""; el.style.boxShadow = ""; }, 400);
        }

        function togglePanel(id) {
            const isChecked = document.getElementById(`chk_${id}`).checked;
            const panel = document.getElementById(`panel_${id}`);
            if (isChecked) {
                panel.style.display = 'block';
            } else {
                panel.style.display = 'none';
            }
        }


        function copy(id) {
            const text = document.getElementById(id).innerText;
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.querySelector(`button[onclick="copy('${id}')"]`);
                const originalText = btn.innerText;
                btn.innerText = 'COPIED! ✓';
                btn.style.background = '#10b981';
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                }, 2000);
            });
        }

        function getVal(idPrefix, key, lang) {
            const el = document.getElementById(`${idPrefix}_${key}`);
            return lang === 'en' ? el.value : el.options[el.selectedIndex].getAttribute('data-zh');
        }

        function generate() {
            const activeIds = ['f1', 'f2', 'm1', 'm2'].filter(id => document.getElementById(`chk_${id}`).checked);
            
            if (activeIds.length === 0) {
                alert("請至少選擇一位演員！");
                return;
            }

            let enChars = [];
            let zhChars = [];

            activeIds.forEach((id, index) => {
                const titleZh = config[id].title.replace(/[^男女主角 12]/g, ''); // 移除 emoji
                const titleEn = `[Subject ${index + 1} - ${config[id].gender === 'f' ? 'Female' : 'Male'}]`;
                
                const ageEn = getVal(id, 'age', 'en'); const ageZh = getVal(id, 'age', 'zh');
                const ethEn = getVal(id, 'eth', 'en'); const ethZh = getVal(id, 'eth', 'zh');
                const faceEn = getVal(id, 'face', 'en'); const faceZh = getVal(id, 'face', 'zh');
                const bodyEn = getVal(id, 'body', 'en'); const bodyZh = getVal(id, 'body', 'zh');
                const outEn = getVal(id, 'outfit', 'en'); const outZh = getVal(id, 'outfit', 'zh');
                const poseEn = getVal(id, 'pose', 'en'); const poseZh = getVal(id, 'pose', 'zh');
                const expEn = getVal(id, 'exp', 'en'); const expZh = getVal(id, 'exp', 'zh');

                enChars.push(`${titleEn}: A ${ageEn} ${ethEn} ${faceEn}. Physique: ${bodyEn}. Expression: ${expEn}. Wearing: ${outEn}. Pose: ${poseEn}.`);
                zhChars.push(`【${titleZh}】一位${ageZh}的${ethZh}，${faceZh}。身形為${bodyZh}，神情${expZh}。穿著${outZh}，動作為${poseZh}。`);
            });

            const sceneEn = getVal('global', 'scene', 'en'); const sceneZh = getVal('global', 'scene', 'zh');
            const lightEn = getVal('global', 'light', 'en'); const lightZh = getVal('global', 'light', 'zh');
            const camEn = getVal('global', 'cam', 'en'); const camZh = getVal('global', 'cam', 'zh');

            const finalEn = `A hyper-realistic 8K cinematic masterpiece photography featuring ${activeIds.length} subject(s). \n\n${enChars.join('\n')}\n\nThe setting is ${sceneEn}. Lighting: ${lightEn}. Shot with ${camEn}. Technical: Subsurface scattering, contact shadows, sharp focus on subjects, cinematic color grading, raw photo style, masterpiece quality.`;
            
            const finalZh = `【大師級多角色寫真】畫面中包含 ${activeIds.length} 位主角。\n\n${zhChars.join('\n')}\n\n場景設定在${sceneZh}。光影效果：${lightZh}。拍攝規格：${camZh}。`;

            // 動畫渲染
            const outEn = document.getElementById('out-en');
            const outZh = document.getElementById('out-zh');
            outEn.style.opacity = '0'; outZh.style.opacity = '0';
            
            setTimeout(() => {
                outEn.innerText = finalEn;
                outZh.innerText = finalZh;
                outEn.style.transition = 'opacity 0.5s ease';
                outZh.style.transition = 'opacity 0.5s ease';
                outEn.style.opacity = '1'; outZh.style.opacity = '1';
            }, 150);
        }

        // 初始化
        window.onload = initPanels;
    