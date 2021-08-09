const makeForm = (index) => {
    let output = '<form action="/update" method="get" target="_self">'

    output += `
    <input type="hidden" name="id" value="${index._id}">

			<input type="text" name="data" placeholder="${index.text}">

			<input type="submit" value="Update">
    `;
    
    return output + '</form>';
}

module.exports = (data) => {
    let output = '<!DOCTYPE html> <html> <body> ';

    data.forEach(index => {
        output += makeForm(index);
    });

    return output + ' </html> </body>';
}