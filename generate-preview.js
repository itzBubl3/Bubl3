// Script pour générer une image de prévisualisation pour les réseaux sociaux
const puppeteer = require('puppeteer');
const fs = require('fs');

async function generatePreviewImage() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Définir la taille de la page pour les réseaux sociaux
    await page.setViewport({ width: 1200, height: 630 });
    
    // Charger le fichier HTML de prévisualisation
    const htmlContent = fs.readFileSync('preview-image.html', 'utf8');
    await page.setContent(htmlContent);
    
    // Attendre que tout soit chargé
    await page.waitForTimeout(1000);
    
    // Prendre une capture d'écran
    await page.screenshot({
        path: 'preview-image.png',
        fullPage: false,
        type: 'png'
    });
    
    await browser.close();
    console.log('Image de prévisualisation générée avec succès !');
}

// Alternative: Utiliser html2canvas (plus simple pour le navigateur)
function generateWithCanvas() {
    // Cette fonction peut être utilisée directement dans le navigateur
    // pour générer l'image sans dépendances externes
    
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    // Dessiner le fond
    const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
    gradient.addColorStop(0, '#000000');
    gradient.addColorStop(0.5, '#1a1a1a');
    gradient.addColorStop(1, '#000000');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1200, 630);
    
    // Ajouter le texte et les éléments visuels
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px Inter';
    ctx.fillText('BUBL3', 100, 250);
    
    ctx.fillStyle = '#8b5cf6';
    ctx.font = '600 28px Inter';
    ctx.fillText('Développeur Roblox Expert', 100, 320);
    
    ctx.fillStyle = '#a0a0a0';
    ctx.font = '18px Inter';
    const description = '4 ans d\'expérience en développement Roblox. Spécialiste en scripts Lua, animations fluides et systèmes anti-triche avancés.';
    wrapText(ctx, description, 100, 380, 500, 25);
    
    // Télécharger l'image
    const link = document.createElement('a');
    link.download = 'preview-image.png';
    link.href = canvas.toDataURL();
    link.click();
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ');
    let line = '';
    let currentY = y;
    
    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, currentY);
            line = words[n] + ' ';
            currentY += lineHeight;
        } else {
            line = testLine;
        }
    }
    ctx.fillText(line, x, currentY);
}

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatePreviewImage, generateWithCanvas };
}
