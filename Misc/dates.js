function getDate() {
    let date = new Date;

    function formatDate() {
        return date.toDateString().slice(4);
    };

    return formatDate();
};

console.log(getDate());
