// ==UserScript==
// @name         XReference version 1.2
// @namespace    http://tampermonkey.net/
// @version      2025-09-26
// @description  try to take over the world!
// @author       Jesus + amrohtm
// @downloadURL   https://axzile.corp.amazon.com/-/carthamus/script/get-title-from-msku-1
// @updateURL    https://axzile.corp.amazon.com/-/carthamus/script/get-title-from-msku-1
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @exclude      https://t.corp.amazon.com/V848112415/
// @match        https://t.corp.amazon.com/*
// @match        https://t.corp.amazon.com/*
// @match        https://tt.amazon.com/*
// @icon         https://upload.wikimedia.org/wikipedia/commons/c/ca/Eo_circle_green_letter-x.svg
// @exclude      https://t.corp.amazon.com/issues?q=*
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// @connect      midway-auth.amazon.com
// @connect      phonetool.amazon.com
// @connect      script.google.com
// @connect      na.amzheimdall.com
// @connect      eu.amzheimdall.com
// @connect      paragon-na.amazon.com
// @connect      fba-fnsku-commingling-console-na.aka.amazon.com
// @connect      search-process-result-dic-prod-usamazon.s3.amazonaws.com
// @connect      sentry.amazon.com
// @connect      fba-registration-console-na.aka.amazon.com
// @connect      heartbeat.cs.amazon.dev
// @connect      csi.amazon.com
// @connect      lse-aea.amazon.com
// @connect      prod-na.dic.authenticity.compliance.amazon.dev
// @connect      cognito-identity.us-east-1.amazonaws.com
// @connect      script.googleusercontent.com
// @connect      wave.qubit.amazon.dev
// @connect      maxis-service.amazon.com
// @connect      maxis-service-prod-iad.amazon.com
// @connect      maxis-service-prod-dub.amazon.com
// @connect      maxis-service-prod-pdx.amazon.com
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM_notification
// @grant        GM_setClipboard
// @noframes
// ==/UserScript==

// function _0x26bc(_0x2d099a,_0x5e9ed9){const _0x331b24=_0x331b();return _0x26bc=function(_0x26bc63,_0x35dbcc){_0x26bc63=_0x26bc63-0xd0;let _0x1e5ccd=_0x331b24[_0x26bc63];return _0x1e5ccd;},_0x26bc(_0x2d099a,_0x5e9ed9);}function _0x331b(){const _0x1709ea=['conversation/','parse','Praise\x20the\x20Lord!!!\x20Success','color','item_name','includes','*******************Data\x20from\x20Blame-O*******************\x0a\x0a','filter',':\x20\x0a','&customer_id=&merchant_id=&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id=&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show&item_id=','extensions','innerHTML','quantity','style','textContent','cssText','appendChild','document','7931530bsmmKU','button','\x20\x20\x20\x20\x20\x20\x20\x20,\x20Rating:\x20','asin','forEach','424BTfUtu','createElement','split','random','36VSIhTD','https://maxis-service-prod-iad.amazon.com/issues/','more\x20tools','log','some','querySelectorAll','case_pack_quantity','slice','conversation','findIndex','length','\x0a\x20\x20\x20\x20\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20top:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20right:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2030px\x2020px\x2030px\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20background:\x20#FF0000;\x0a\x20\x20\x20\x20\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20border:\x203px\x20solid\x20white;\x0a\x20\x20\x20\x20\x20\x20\x20\x20cursor:\x20pointer;\x0a\x20\x20\x20\x20\x20\x20\x20\x20','xmlHttpRequest','href','additional_links','8769929cJkNkt','76023JfQUWY','brand','Running\x20CrossRefence\x20script.\x20Praise\x20the\x20Lord!!!\x20Yahooo!!!!!!','push','https://t.corp.amazon.com/','text/plain','parseFromString','body','size','reduce','POST','GET','replaceAll','replace','Get\x20attributes\x20from\x20Blame-O','fabric','deprecated','There\x20was\x20an\x20error','Successfully\x20fetched\x20data\x20from\x20Blame-O','entries','pattern_type','unit_count','30741EnzshT','https://csi.amazon.com/view?view=blame_o&marketplace_id=','/edits','2544268zZHKrP','PUT','stringify','onclick','addEventListener','trim','join','total_eaches','material_composition','item_description','application/json','bullet_point','\x20(Seller\x20ID:\x20','4078245SmxRVL','material','#productdata\x20tbody\x20tr','6RQVnYW','text/html','binding','https://t.corp.amazon.com','nutritional\x20info','compatibility','xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx','location','ingredients','825639HFYqsK','********\x20Part\x20of\x20the\x20fetched\x20data\x20is\x20incorrect,\x20please\x20check\x20Blame-O\x20directly\x20********\x20\x0a\x0a','test','blame_o_reconciled_row'];_0x331b=function(){return _0x1709ea;};return _0x331b();}(function(_0x28389e,_0x2da70a){const _0x14e97b=_0x26bc,_0x5e00db=_0x28389e();while(!![]){try{const _0x1714ec=parseInt(_0x14e97b(0xd8))/0x1+parseInt(_0x14e97b(0xf7))/0x2*(parseInt(_0x14e97b(0x11d))/0x3)+parseInt(_0x14e97b(0x120))/0x4+-parseInt(_0x14e97b(0x12d))/0x5+parseInt(_0x14e97b(0x130))/0x6*(parseInt(_0x14e97b(0x106))/0x7)+-parseInt(_0x14e97b(0xf3))/0x8*(parseInt(_0x14e97b(0x107))/0x9)+-parseInt(_0x14e97b(0xee))/0xa;if(_0x1714ec===_0x2da70a)break;else _0x5e00db['push'](_0x5e00db['shift']());}catch(_0x15fce5){_0x5e00db['push'](_0x5e00db['shift']());}}}(_0x331b,0xcdb0a),(async function(){const _0x17acc8=_0x26bc;console[_0x17acc8(0xfa)](_0x17acc8(0x109));const _0x583e34=[],_0xaad283=/.*en_[A-Z]{2}/;window[_0x17acc8(0x124)]('load',_0x21ad37);function _0x21ad37(){const _0x493c66=_0x17acc8,_0x439193=document[_0x493c66(0xf4)](_0x493c66(0xef));_0x439193[_0x493c66(0xe7)]=_0x493c66(0x115),_0x439193[_0x493c66(0xe9)][_0x493c66(0xeb)]=_0x493c66(0x102),_0x439193[_0x493c66(0x123)]=_0x1acb08,document[_0x493c66(0x10e)][_0x493c66(0xec)](_0x439193);}async function _0x1acb08(){const _0x327d31=_0x17acc8,_0x38c501=document['URL'][_0x327d31(0x114)](_0x327d31(0x10b),'')['split']('/')[0x0][_0x327d31(0x125)](),_0x11f5cc=_0x327d31(0xf8)+_0x38c501,{ASIN:_0x4d40bd,marketPlace:_0x12b855}=await _0x1f4f6c(_0x11f5cc);await _0xc17f66(_0x4d40bd,_0x12b855);const _0x3be264=_0x583e34;await _0x52e7db(_0x38c501,_0x3be264);};async function _0x1f4f6c(_0x1fd1f1){const _0x18a8ab=_0x17acc8;let _0x10539d,_0x41070c;try{_0x10539d=await GM[_0x18a8ab(0x103)]({'method':_0x18a8ab(0x112),'url':_0x1fd1f1,'responseType':'json','onload':_0x2dad82=>{const _0x4c235a=_0x18a8ab;try{const _0x347f5c=JSON[_0x4c235a(0xdd)](_0x2dad82['responseText']),_0x34850a=_0x347f5c[_0x4c235a(0xe6)]['tt'][_0x4c235a(0xf1)],_0x276db3=_0x347f5c[_0x4c235a(0xe6)]['tt']['physicalLocation'];_0x41070c={'ASIN':_0x34850a,'marketPlace':_0x276db3};}catch(_0x20b75d){console[_0x4c235a(0xfa)](_0x20b75d);}}});}catch(_0x118d97){console[_0x18a8ab(0xfa)](_0x118d97);}return _0x41070c;}async function _0xc17f66(_0x513b8f,_0x1e96f9){const _0x4bd352=_0x17acc8,_0x4f4e3d=_0x4bd352(0x11e)+_0x1e96f9+_0x4bd352(0xe5)+_0x513b8f,_0xe3b959=[_0x4bd352(0x10f),_0x4bd352(0xe8),_0x4bd352(0xfd),'item_package_quantity',_0x4bd352(0x11c),_0x4bd352(0x127),'case_package_quantity',_0x4bd352(0xdf),_0x4bd352(0x11b),_0x4bd352(0x116),'fabric_type',_0x4bd352(0x12e),_0x4bd352(0x128),'model\x20number',_0x4bd352(0x108),_0x4bd352(0xd3),_0x4bd352(0xd7),_0x4bd352(0xd1),_0x4bd352(0xd4),_0x4bd352(0xe0),_0x4bd352(0x129),_0x4bd352(0x12b)],_0x37e885=_0x2956c8=>{const _0x3da839=_0x4bd352,_0x59f4e8=new DOMParser()[_0x3da839(0x10d)](_0x2956c8,_0x3da839(0xd0)),_0x4249f7=_0x43f941=>_0x43f941[_0x3da839(0x125)]()!=='';let _0x5b4aa0=_0x59f4e8[_0x3da839(0x10e)][_0x3da839(0xea)][_0x3da839(0xf5)](/\s+/)[_0x3da839(0xe3)](_0x4249f7);return _0x5b4aa0=_0x5b4aa0[_0x3da839(0xfe)](0x2,_0x5b4aa0[_0x3da839(0x101)]),_0x5b4aa0['length']===0x9?_0x5b4aa0:_0x16b9d5(_0x5b4aa0);},_0x16b9d5=_0x2c0daa=>{const _0x5b26db=_0x4bd352,_0x374548=_0x2c0daa[_0x5b26db(0x100)](_0x466ae8=>_0xaad283[_0x5b26db(0xda)](_0x466ae8));console[_0x5b26db(0xfa)](_0x374548);const _0x5def07=_0x2c0daa[_0x5b26db(0xfe)](0x1,_0x374548)[_0x5b26db(0x126)]('\x20'),_0x213c12=_0x2c0daa[_0x5b26db(0xfe)](_0x374548,_0x374548+0x7),_0x4d3999=[_0x2c0daa[0x0],_0x5def07,..._0x213c12];return _0x4d3999;};try{const _0x19161f=await GM[_0x4bd352(0x103)]({'method':_0x4bd352(0x112),'url':_0x4f4e3d,'responseType':_0x4bd352(0xed),'timeout':0x1388}),_0x41b443=_0x19161f['response'][_0x4bd352(0xfc)](_0x4bd352(0x12f));for(const _0x3bf277 of _0x41b443){const _0x7c50f8=_0x3bf277[_0x4bd352(0xe7)][_0x4bd352(0x113)](_0x4bd352(0xf9),''),_0x1889f7=_0xbfc747=>{const _0x3a2c5a=_0x4bd352,_0x552ef8=new RegExp('\x5cb'+_0xbfc747+'\x5cb','i');return _0x552ef8[_0x3a2c5a(0xda)](_0x7c50f8);},_0x506201=!_0x7c50f8[_0x4bd352(0xe1)](_0x4bd352(0xdb))||!_0xe3b959[_0x4bd352(0xfb)](_0x1889f7)||!_0xaad283[_0x4bd352(0xda)](_0x7c50f8)||_0x7c50f8['includes'](_0x4bd352(0x117));if(_0x506201)continue;_0xaad283[_0x4bd352(0xda)](_0x7c50f8)&&console[_0x4bd352(0xfa)]('working');const _0x57173b=_0x37e885(_0x7c50f8),_0x19b5b6=_0x40d342=>_0x57173b[0x0]?.[_0x4bd352(0xe1)](_0x40d342);if(!_0xe3b959[_0x4bd352(0xfb)](_0x19b5b6))continue;console[_0x4bd352(0xfa)](_0x57173b),_0x583e34[_0x4bd352(0x10a)](_0x57173b);}console[_0x4bd352(0xfa)]('Success,\x20Praise\x20the\x20Lord!!!',_0x583e34),GM_notification({'title':_0x4bd352(0x119),'text':_0x4bd352(0xde),'timeout':0x1388});}catch(_0x25e188){console[_0x4bd352(0xfa)](_0x4bd352(0x118),_0x25e188),await _0xc17f66(_0x513b8f,_0x1e96f9);}}async function _0x52e7db(_0x5cc8df,_0x4a6c82){const _0x203b03=_0x324591(),_0xa5922b=_0x2bcb9e(_0x4a6c82,_0x203b03);_0x214fe0(_0x5cc8df,_0xa5922b);}function _0x324591(){const _0x1f56ad=_0x17acc8,_0x1b28bc=_0x423f83=>{const _0x160c8c=_0x26bc,_0x28bff3=Math[_0x160c8c(0xf6)]()*0x10|0x0,_0x307ee6=_0x423f83==='x'?_0x28bff3:_0x28bff3&0x3|0x8;return _0x307ee6['toString'](0x10);};return _0x1f56ad(0xd5)['replace'](/[xy]/g,_0x1b28bc);}function _0x2bcb9e(_0x320320,_0x70144f){const _0x3c66af=_0x17acc8;let _0x573ba3,_0x339e5c=_0x3c66af(0xe2);const _0x4c562e=(_0x4c8a3a,_0x5bf422)=>{const _0x305719=_0x3c66af,_0x2884de=_0x5bf422[0x0]+(_0x305719(0x12c)+_0x5bf422[0x1])+(_0x305719(0xf0)+_0x5bf422[0x2]+'\x20)'),_0x407f4e=_0x5bf422[0x3];_0x4c8a3a[_0x2884de]??='';const _0x546532=!_0x407f4e[_0x305719(0xe1)](_0x305719(0x105));return _0x4c8a3a[_0x2884de]+=_0x546532?_0x407f4e+'\x0a\x0a':_0x305719(0xd9),_0x4c8a3a;};return Object[_0x3c66af(0x11a)](_0x320320['map'](_0x514763=>[_0x514763[0x0],_0x514763[0x4],_0x514763[0x7],_0x514763[0x1]])[_0x3c66af(0x110)](_0x4c562e,{}))[_0x3c66af(0xf2)](_0x4a5e02=>_0x339e5c+=_0x4a5e02[0x0]+_0x3c66af(0xe4)+_0x4a5e02[0x1]+'\x0a\x0a'+'=============================\x0a'),console[_0x3c66af(0xfa)](_0x339e5c),_0x573ba3={'pathEdits':[{'path':_0x3c66af(0xdc)+_0x70144f,'editAction':_0x3c66af(0x121),'data':{'id':_0x70144f,'message':_0x339e5c,'contentType':_0x3c66af(0x10c),'messageType':_0x3c66af(0xff)}}]},_0x573ba3;}async function _0x214fe0(_0x1d695f,_0xa5c4a){const _0x1e7945=_0x17acc8,_0x19313b=_0x1e7945(0xf8)+_0x1d695f+_0x1e7945(0x11f);try{const _0x15268c=await GM[_0x1e7945(0x103)]({'method':_0x1e7945(0x111),'url':_0x19313b,'headers':{'Content-Type':_0x1e7945(0x12a),'Origin':_0x1e7945(0xd2)},'data':JSON[_0x1e7945(0x122)](_0xa5c4a)});window[_0x1e7945(0xd6)][_0x1e7945(0x104)]=window['location']['href']+'/communication',console[_0x1e7945(0xfa)](_0x15268c);}catch(_0x2742a1){console[_0x1e7945(0xfa)](_0x2742a1);}};}()));

(async function() {
    console.log("Running CrossRefence script. Praise the Lord!!! Yahooo!!!!!!")
    const results = []
    let shortId, payload, bx

    let lang2MPdict = {
    1: 'en_NA',
    7: 'en_CA',
    338801: 'en_AE',
    338811: 'en_SA',
    }

    window.addEventListener("load", startUp)
    function playBeep() {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 1000; // frequency in hertz
        oscillator.type = 'sine'; // waveform type
        gainNode.gain.value = 0.1; // volume

        oscillator.start();
        setTimeout(() => {
            oscillator.stop();
        }, 100); // duration in milliseconds
    }



    function startUp() {
        getDataFromSIMAPI()

        const e = document.createElement("button")
        e.id= "Cross_ref_button"
        e.innerHTML = "Post Blame-O data"
        e.style.cssText =
            `position: absolute;
    top: 50px;
    right: 30px;
    z-index: 9999;
    padding: 5px 5px;
    background: #FFA500;
    font-weight:bold;
    color: black;
    font-size:20px;
    border: 3px solid white;
    border-radius: 9px;
    border-color: black;
    cursor: pointer;
`.replace(/\s+/g, ' ').trim();


        e.onclick = function() {
            postToCorrespondence(shortId, payload)
        }
        document.body.appendChild(e)
    }

    async function getTicketDetails(u) {
        let v, w
        try {
            v = await GM.xmlHttpRequest({
                method: "GET",
                url: u,
                responseType: "json",
                onload: (y) => {
                    try {
                        const aa = JSON.parse(y.responseText),
                              ab = aa.extensions.tt.asin,
                              ac = aa.extensions.tt.physicalLocation || aa.description.match(/Marketplace.*(\d+)/i)[1].trim()
                        const shortId = aa.aliases['0'].id
                        w = {
                            ASIN: ab,
                            marketPlace: ac,
                        }
                    } catch (ad) {
                        console.log(ad)
                    }
                },
            })
        } catch (ae) {
            console.log(ae)
        }
        return w
    }

    async function getDataFromSIMAPI() {

        shortId = document.URL.replace("https://t.corp.amazon.com/", "")
            .split("/")[0]
            .trim();
        let j = "https://maxis-service-prod-iad.amazon.com/issues/" + shortId;
        const {
            ASIN,
            marketPlace
        } = await getTicketDetails(j)
        await getDatafromBlameO(marketPlace, ASIN)
        await processDatatoTicket(shortId, results)


        //setTimeout(() => (location.href = location.href),30000)
    }

    async function getDatafromBlameO(marketPlace, ASIN) {
        const blameOURL =
              "https://csi.amazon.com/view?view=blame_o&marketplace_id=" +
              marketPlace +
              "&customer_id=&merchant_id=&sku=&fn_sku=&gcid=&fulfillment_channel_code=&listing_type=purchasable&submission_id="+
              "&order_id=&external_id=&search_string=&realm=USAmazon&stage=prod&domain_id=&keyword=&submit=Show&item_id="+
              ASIN
        const interestedAttributes = [
            "size",
            "quantity",
            "case_pack_quantity",
            "item_package_quantity",
            "unit_count",
            "total_eaches",
            "case_package_quantity",
            "color",
            "pattern_type",
            "fabric",
            "fabric_type",
            "material",
            "material_composition",
            "model number",
            "brand",
            "nutritional info",
            "ingredient",
            "binding",
            "compatibility",
            "item_name",
            "item_description",
            "bullet_point",
        ];
        const removeHTMLtags = (textWithHTMLtags) => {
            return new DOMParser().parseFromString(textWithHTMLtags, "text/html");
        };
        const getArrayfromCleanedHTML = (cleanedHTML) => cleanedHTML.body.innerText.split('\n')

        const removeSpaces = (element) => element.trim() !== "";

        const stripHtmlAndProcessWords = (rowData) => {
            const splitAtTD = rowData.split('<td>')
            const cleanedHTML = removeHTMLtags(splitAtTD);
            const cleanedArray = getArrayfromCleanedHTML(cleanedHTML)
            .filter(removeSpaces);
            cleanedArray = cleanedArray.slice(2);
            return cleanedArray.length === 9 ? cleanedArray : processFurther(cleanedArray);
        };

        const processFurther = (returnArray) => {
            const langIndex = returnArray.findIndex((at) =>
                                                    /.*en_[A-Z]{2}/.test(at)
                                                   );
            console.log(langIndex);
            const au = returnArray.slice(1, langIndex).join(" "),
                  av = returnArray.slice(langIndex, langIndex + 7),
                  cleanedArray = [returnArray[0], au, ...av];
            return cleanedArray;
        };

        try {
            const blameOData = await GM.xmlHttpRequest({
                method: "GET",
                url: blameOURL,
                responseType: "document",
                timeout: 20000,
            });
            const tableData = blameOData.response.querySelectorAll("#productdata tr");
            const tableHeaders = tableData[0].innerText.split('\n')
            .filter(removeSpaces)
            .map(element => element.trim())


            for (const row of tableData) {
                const rowData = row.innerHTML.replaceAll("more tools", "");

                const hasRelevantInfoInTheRow = (oneInterestedAttribute) => {
                    const bd = new RegExp("\\b" + oneInterestedAttribute + "\\b", "i")
                    return bd.test(rowData)
                };
                //first filter to remove non winning contributions
                const condition = rowData.includes('<th>') ||
                      !rowData.includes("blame_o_reconciled_row") || //winning contribution
                      !interestedAttributes.some(hasRelevantInfoInTheRow) || //the row has some text inside it that matches the interested attributes
                      !/.*en_[A-Z]{2}/.test(rowData) || //is the info in english
                      rowData.includes("deprecated") //It is a non deprecated row
                if (condition) {
                    continue
                };

                /.*en_[A-Z]{2}/.test(rowData)
                // console.log("working")

                const rowTextAsArray = row.innerText
                .replaceAll("more tools", "")
                .split('\n')
                .slice(1,-1)
                .map(element => element.trim());



                //         console.log(rowTextAsArray)
                results.push(rowTextAsArray)

            }
            console.log("Success, Praise the Lord!!!", results)
            // GM_notification({
            //     title: "Successfully fetched data from Blame-O",
            //     text: "Praise the Lord!!! Success",
            //     timeout: 5000,
            // })
        } catch (bi) {
            console.log("There was an error", bi)
            await getDatafromBlameO(marketPlace, ASIN)
        }
    }


    async function processDatatoTicket(shortId, resultsFromBlameO) {
        const GUID = gennerateGUID()
        payload = prepPayload(resultsFromBlameO, GUID)
        //        postToCorrespondence(shortId, payload)
    }

    function gennerateGUID() {
        const bq = (br) => {
            const bs = (Math.random() * 16) | 0,
                  bt = br === "x" ? bs : (bs & 3) | 8
            return bt.toString(16)
        }
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, bq)
    }

    function prepPayload(resultsFromBlameO, GUID) {
        let bw
        console.log(shortId);
        bx = `Ticket ID: ${shortId}, user ID: amrohtm
        *******************Data from Blame-O*******************\n\n`
        const aggregateData = (acc, arrayElement) => {
            const attributeHeader =
                  arrayElement[0] +
                  (" (Seller ID: " + arrayElement[2]) +
                  ("        , Rating: " + arrayElement[3] + " )"),
                  attributeValue = arrayElement[1]
            acc[attributeHeader] ??= ""
            const cd = !attributeValue.includes("additional_links");
            acc[attributeHeader] += cd ?
                attributeValue + "\n\n" :
            '******** Part of the fetched data is incorrect, please check Blame-O directly ******** \n\n'
            return acc
        }


        // Step 1: Map the array elements to extract specific fields
        const mappedData = resultsFromBlameO.map((arrayElement) => [
            arrayElement[2],  // attribute
            arrayElement[3],  // value
            arrayElement[9],  // seller ID
            arrayElement[16], // rating
        ]);

        // Step 2: Aggregate the mapped data
        const aggregatedData = mappedData.reduce(aggregateData, {});

        // Step 3: Convert aggregated data to entries
        const dataEntries = Object.entries(aggregatedData);

        // Step 4: Build the formatted string by iterating through entries
        dataEntries.forEach((cf) => {
            bx += cf[0] + ": \n" + cf[1] + " \n\n" + "=============================\n";
        });

        const currentTimestamp = new Date().toISOString();

        // Step 6: Create the pathEdits object
        bw = {
            pathEdits: [
                {
                    path: "conversation/" + GUID,
                    editAction: "PUT",
                    data: {
                        id: GUID,
                        message: bx,
                        contentType: "text/plain",
                        messageType: "conversation",
                    },
                },
                {
                    path: "/next_step",
                    "editAction": "PUT",
                    "data": {
                        "owner": "role:resolver",
                        "action": "Implementation",
                        "exceptions": [{
                            "id": currentTimestamp,
                            "reasonMessage": [{
                                "id": "en-US",
                                "text": "external information - pending from seller"
                            }]
                        }]
                    }
                },
                {
                    "path": "/assigneeIdentity",
                    "editAction": "PUT",
                    "data": "kerberos:amrohtm@ANT.AMAZON.COM"
                },
            ]
        };

        // Step 7: Assign the final return value
        const retData = bw;

        return retData;
    }
    async function postToCorrespondence(shortId, payload) {

        //         const button = document.getElementById('Cross_ref_button')
        //         button.style.cssText =
        //             `position: absolute;
        //     top: 50px;
        //     right: 30px;
        //     z-index: 9999;
        //     padding: 5px 5px;
        //     background: #FFA500;
        //     font-weight:bold;
        //     color: black;
        //     font-size:20px;
        //     border: 3px solid black;
        //     border-radius: 9px;
        //     cursor: pointer;
        //     `.replace(/\s+/g, ' ').trim();

        //         button.innerText = "Click to post data"

        //         button.style.backgroundColor = '#48D914';
        //         button.style.borderColor = "black";
        //         button.innerText = "Done"


        const ci =
              "https://maxis-service-prod-iad.amazon.com/issues/" + shortId + "/edits"
        try {
            const cj = await GM.xmlHttpRequest({
                method: "POST",
                url: ci,
                headers: {
                    "Content-Type": "application/json",
                    Origin: "https://t.corp.amazon.com",
                },
                data: JSON.stringify(payload),
            })

            setTimeout(GM_setClipboard (`conflicting info? \n Just tell me yes or no. Give me the analysis only if it is a yes, otherwise just say 'no'.
        If there are conflicting details, only then frame them into sendable statements (1 discrepancy per statement) and not bullet point (without the bullet point icons) using a casual tone \n ${bx}`), 20000)
            playBeep();

            setTimeout(() => {
                console.log('God is good, all the time. Praise the Lord!!');
             //   location.href = location.href
            }, 5000)


        } catch (ck) {
            console.log(ck)
        }
    }
})()