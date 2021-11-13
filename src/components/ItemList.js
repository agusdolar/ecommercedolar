

const productos = [
    { id: 1, name: 'Maradona', precio: 15000, imag: "http://cdn23.us1.fansshare.com/photos/diegomaradona/diego-maradona-1587036107.jpg" },
    { id: 2, name: 'Zeus', precio: 20000, imag: "https://academiaplay.es/wp-content/uploads/2019/08/zeus-hera.jpg"},
    { id: 3, name: 'Salvador Dali', precio: 1000, imag: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62292a70-33b8-4d85-9377-955e8bd95af7/d5iqdjy-9962a6cb-9822-4fa9-b64b-8c6d891100ce.jpg/v1/fill/w_900,h_1200,q_75,strp/retrato_realista__salvador_dali_by_h3ct0r_dibujos_d5iqdjy-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzYyMjkyYTcwLTMzYjgtNGQ4NS05Mzc3LTk1NWU4YmQ5NWFmN1wvZDVpcWRqeS05OTYyYTZjYi05ODIyLTRmYTktYjY0Yi04YzZkODkxMTAwY2UuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.2-b3Bgq373oByTniUG6A27JZyZHBzmdbibWv4lm1ohg"},
    ];
    
    let is_ok = true; 
    
    let inventario = (timeout, tarea) => {
    return new Promise ((resolve, reject) => {
    if (is_ok) {
      setTimeout (() => {
      resolve(tarea);
    }, timeout);
    } else {
    reject('Error');
    }
    });
    };
    
    inventario(0, console.log('Procesando Inventario...'))
    .then(() => inventario(2000, console.log(productos[0])))
    .then(() => inventario(4000, console.log(productos[1])))
    .then(() => inventario(6000, console.log(productos[2])))
    
    .catch((err) => console.log(err))
    
    .finally(() => console.log('Proceso finalizado'));

  
    