function GerarQRCode() {
    var inputUser = document.querySelector('textarea').value;
    var GoogleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=512x512&chl=';
    var contentQRCode = GoogleChartAPI + encodeURIComponent(inputUser)
    document.querySelector('#QRCodeImage').src = contentQRCode
}