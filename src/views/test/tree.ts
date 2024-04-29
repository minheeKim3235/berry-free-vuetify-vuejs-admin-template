let i = 0;
const tree = function() {
    const btnExpand = document.querySelectorAll('.btnExpand');
    const btnExpandAll = document.querySelector('.btnExpandAll');
    const nestedItem = document.querySelectorAll('.nested');
    
    btnExpand.forEach((e) => {
        e.addEventListener('click', (item) => {
            const selectedItem = item.currentTarget.parentElement;
            const openList = selectedItem.nextSibling;
            
            openList.classList.toggle('active');
        });
        
    });

    btnExpandAll.addEventListener('click', (e) => {
        if (i == 0) {
            e.currentTarget.innerText = '전체 닫기';
            nestedItem.forEach((item) => {
                item.classList.add('active');
            });
            i++;
            console.log(btnText);
        } else {
            e.currentTarget.innerText = '전체 펼침';
            nestedItem.forEach((item) => {
                item.classList.remove('active');
            });
            i = 0;
        };
    });
};

export { tree };