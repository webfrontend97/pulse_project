function forms(form) {
    const forms = document.querySelectorAll(form);
    forms.forEach(item => {
        bindPostData(item);
    })
}

function bindPostData(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const json = JSON.stringify(Object.fromEntries(formData.entries()));

        postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
    });
}

const postData = async (url, data) => {
    let res = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

export default forms;