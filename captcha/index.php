<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fake reCAPTCHA UI</title>
<style>
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }

    .recaptcha-box {
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        padding: 10px;
        display: inline-block;
        font-family: Arial, sans-serif;
    }

    .recaptcha-header {
        display: flex;
        align-items: center;
    }

    .recaptcha-checkbox {
        position: relative;
        width: 25px;
        height: 25px;
        border: 2px solid #aaa;
        border-radius: 3px;
        cursor: pointer;
        margin-right: 10px;
        background: #fff;
    }

    .recaptcha-checkbox.checked {
        background: #4285f4;
        border-color: #4285f4;
    }

    .recaptcha-checkbox.checked::after {
        content: '✔';
        color: #fff;
        font-size: 18px;
        position: absolute;
        top: -2px;
        left: 3px;
    }

    .recaptcha-text {
        font-size: 14px;
        user-select: none;
    }

    .recaptcha-footer {
        margin-top: 10px;
        font-size: 12px;
        color: #999;
        display: flex;
        align-items: center;
    }

    .recaptcha-icon {
        background: url('https://www.gstatic.com/images/branding/product/1x/recaptcha_48dp.png') no-repeat center;
        background-size: 20px 20px;
        width: 20px;
        height: 20px;
        margin-right: 5px;
    }

    .recaptcha-logo-text {
        font-size: 12px;
        color: #555;
    }
</style>
</head>
<body>

<div class="recaptcha-box">
    <div class="recaptcha-header">
        <div class="recaptcha-checkbox" id="fakeCheckbox"></div>
        <div class="recaptcha-text">Je ne suis pas un robot</div>
    </div>
    <div class="recaptcha-footer">
        <div class="recaptcha-icon"></div>
        <div class="recaptcha-logo-text">reCAPTCHA UI</div>
    </div>
</div>

<script>
    const checkbox = document.getElementById('fakeCheckbox');
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('checked');
        // Ici, vous pourriez déclencher votre redirection ou logique supplémentaire.
        // Par exemple, une fois coché, rediriger vers index.html :
        if (checkbox.classList.contains('checked')) {
            setTimeout(() => {
                window.location.href = 'index.html'; 
            }, 500); 
        }
    });
</script>

</body>
</html>
