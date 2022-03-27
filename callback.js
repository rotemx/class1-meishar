setTimeout(()=>{
    console.log('future');
    setTimeout(()=>{
        console.log('future');
        setTimeout(()=>{
            console.log('future');
            setTimeout(()=>{
                console.log('future');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// callback cascade of hell
