const Jimp = require('jimp');

async function removeBackground() {
  console.log('Processing image...');
  const image = await Jimp.read('public/neem_leaf.png');
  
  // Make pixels that are close to white completely transparent
  const tolerance = 60; // 0-255
  
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const r = this.bitmap.data[idx + 0];
    const g = this.bitmap.data[idx + 1];
    const b = this.bitmap.data[idx + 2];
    
    // Check if pixel is close to white (255, 255, 255)
    if (r > 255 - tolerance && g > 255 - tolerance && b > 255 - tolerance) {
      // Basic anti-aliasing/feathering: if it's very close, make it fully transparent.
      // If it's near the edge of the tolerance, make it semi-transparent.
      let distance = Math.max(255 - r, 255 - g, 255 - b);
      if (distance < tolerance / 2) {
         this.bitmap.data[idx + 3] = 0;
      } else {
         // fade out edges
         let alpha = Math.floor((distance / tolerance) * 255);
         this.bitmap.data[idx + 3] = Math.min(alpha, this.bitmap.data[idx + 3]);
      }
    }
  });

  await image.writeAsync('public/neem_leaf_transparent.png');
  console.log('Done creating neem_leaf_transparent.png');
}

removeBackground().catch(console.error);
