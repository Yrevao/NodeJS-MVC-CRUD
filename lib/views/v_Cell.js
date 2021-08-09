// extract useful data from index and render html form with data
const makeForm = (index) => {
    let output = '';

    output += `
    <form target="_self">
        <input type="hidden" name="id" value="${index._id}">

        <input type="text" name="data" placeholder="${index.text}">
        
        <input type="submit" value="Update" formaction="/update" formmethod="get">
        <input type="submit" value="Delete" formaction="/delete" formmethod="get">
    </form>
    `;
    
    return output;
}

// export function that renders html forms from cell data array to allow for CRUD operations
module.exports = (data) => {
    let output = '<!DOCTYPE html> <html> <body> ';

    output += `
    <form target="_self">
        <input type="text" name="data">

        <input type="submit" value="Create" formaction="/create" formmethod="get">
    </form>
    `

    data.slice().reverse().forEach(index => {
        output += makeForm(index);
    });

    return output + ' </html> </body>';
}