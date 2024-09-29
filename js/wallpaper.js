((Drupal, drupalSettings, once) => {
  Drupal.behaviors.localgovGinLoginWallpaper = {
    attach: function(context) {
      once("localgovGinLogin", ".user-form-page__wallpaper", context).forEach((() => {
        Drupal.localgovGinLoginWallpaper.randomWallpaper();
      }));
    }
  }, Drupal.localgovGinLoginWallpaper = {
    randomWallpaper: () => {
      const wallpapers = drupalSettings.localgov_gin_login.town_halls.wallpapers;
      const path = drupalSettings.localgov_gin_login.path + "/", wallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];
      let image = new Image;
      image.src = path + wallpaper.image, image.alt = "", document.querySelector(".gin-login .user-form-page__wallpaper").appendChild(image);
      let description = wallpaper.name + ' by ' + wallpaper.author + ' ';
      let description_elem = document.createElement('p');
      description_elem.className = 'locagov-gin-login--wallpaper--description';
      description_elem.textContent = description;
      let license_elem = document.createElement('a');
      license_elem.setAttribute('href', wallpaper.license_link);
      license_elem.textContent = wallpaper.license;
      description_elem.appendChild(license_elem);
      document.querySelector(".gin-login .user-form-page__wallpaper").appendChild(description_elem);
    }
  };
})(Drupal, drupalSettings, once);