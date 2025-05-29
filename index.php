<!doctype html>
<html lang="ru">
<head>
    <?php include 'public/partials/head.php'; ?>
</head>
<body>
    <?php /* include 'public/partials/preloader.php'; */ ?>

    <?php include 'public/partials/header.php'; ?>
    
    <main> <!-- main -->
        <section style="">
            <div class="container">
                <h2>Icons</h2>
                <p>
                    Иконка аларм <i class="bi bi-alarm"></i><br/>
                    Music <i class="bi bi-apple-music"></i>
                </p>
                
                <h2>Grid</h2>
                <div class="row">
                    <div class="col-xs-3" style="background: red;">1</div>
                    <div class="col-xs-3" style="background: green;">2</div>
                    <div class="col-xs-3" style="background: blue;">3</div>
                </div>
                
                <h2>Slider</h2>
                <div class="slider">
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                    <div class="slider-item"><img width="300" height="200" src="images/media/2.jpg" alt=""></div>
                </div>
                
                <!-- <img width="300" height="200" src="images/media/2.jpg" alt=""> -->
            
                <h2>Lightbox</h2>
                <?php for ($i = 1; $i <= 3; $i++): ?>
                    <a href="images/media/<?= $i ?>.jpg" class="lightbox" data-gallery="g">
                        <img width="300" height="200" src="images/media/<?= $i ?>.jpg" alt="">
                    </a>
                <?php endfor; ?>
                <div>
                    <a href="#modal-info" class="lightbox">#modal-info</a>
                </div>
            
                <h2>Lazyload</h2>
                <?php for ($i = 1; $i <= 3; $i++): ?>
                    <p>
                        <img src="images/media/<?= $i ?>.jpg" alt="" loading="lazy">
                        <br/>
                        <iframe src="https://www.youtube.com/embed/ufop9q91PVs" loading="lazy"></iframe>
                    </p>
                <?php endfor; ?>
            </div>
        </section>
    </main> <!-- /main -->

    <?php include 'public/partials/footer.php'; ?>
    
    <?php include 'public/partials/modals.php'; ?>

    <script src="/src/js/main.js" type="module"></script>
</body>
</html>