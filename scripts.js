document.addEventListener('DOMContentLoaded', function() {
    const startJourneyBtn = document.getElementById('startJourney');

    startJourneyBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const videoInfo = "3.07 06/06 lca:/ f@o.qE # 爬山🧗 # 风景 # 感受大自然的气息和美景 # 旅行 # 旅行推荐官";
        const videoLink = 'https://v.douyin.com/iBr5C7bU/';
        const fullText = `${videoInfo} ${videoLink} 复制此链接，打开Dou音搜索，直接观看视频！`;
        
        // 创建一个临时的文本区域元素
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = fullText;
        document.body.appendChild(tempTextArea);
        
        // 选择文本
        tempTextArea.select();
        tempTextArea.setSelectionRange(0, 99999); // 对于移动设备
        
        // 复制文本
        document.execCommand('copy');
        
        // 移除临时元素
        document.body.removeChild(tempTextArea);
        
        // 提示用户
        alert('视频信息已复制到剪贴板！请在抖音中搜索观看视频。');
        
        // 尝试打开抖音链接
        window.open(videoLink, '_blank');
    });

    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeBtn = document.getElementsByClassName("close")[0];
    var zoomInBtn = document.getElementById("zoomIn");
    var zoomOutBtn = document.getElementById("zoomOut");
    var downloadLink = document.getElementById("downloadLink");
    var currentZoom = 1;

    var imgs = document.getElementsByClassName('gallery-img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            downloadLink.href = this.src;
            currentZoom = 1;
            modalImg.style.transform = 'scale(1)';
        }
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    zoomInBtn.onclick = function() {
        currentZoom += 0.1;
        modalImg.style.transform = `scale(${currentZoom})`;
    }

    zoomOutBtn.onclick = function() {
        if (currentZoom > 0.5) {
            currentZoom -= 0.1;
            modalImg.style.transform = `scale(${currentZoom})`;
        }
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
