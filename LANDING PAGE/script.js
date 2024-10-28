document.getElementById('submit-btn')
.addEventListener('click',function(e){
    e.preventDefault();
    const name =
    document.getElementById('name').value;
    const contactNumber =
    document.getElementById('contact-number').value;
    const email =
    document.getElementById('email').value;
    const address =
    document.getElementById('address').value;
    const product =
    document.getElementById('product').value;
    const variant =
    document.getElementById('variant').value;
    const quantity =
    document.getElementById('quantity').value;

    const output =`
    <table>
    <thead>     
                <tr>
                    <th>Name:</th>
                    <th>Contact Number:</th>
                    <th>Email:</th>
                    <th>Address:</th>
                    <th>Product:</th>
                    <th>Variant:</th>
                    <th>Quantity:</th>
                </tr>
    </thead>
    <tbody>
                <tr>
                    <td>${name}</td>
                    <td> ${contactNumber}</td>
                    <td>${email}</td>
                    <td>${address}</td>
                    <td>${product}</td>
                    <td>${variant}</td>
                    <td>${quantity}</td>
                </tr>
    </tbody>
    </table>

    <h2>Order Summary:</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Contact Number:</b> ${contactNumber}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Address:</b> ${address}</p>
    <p><b>Product:</b> ${product}</p>
    <p><b>Variant:</b> ${variant}</p>
    <p><b>Quantity:</b> ${quantity}</p>
    `;
   
   document.getElementById('output').innerHTML=output;
});