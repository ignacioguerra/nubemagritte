# Nube Magritte ️

*Encuentros fortuitos y paisajes improbables*

An interactive web-art piece (2011) that creates a collective, wandering cloud experience inspired by René Magritte's marble clouds and Julio Cortázar's literary imagination.

## Live Artwork

🌐 **Experience the artwork:** [http://nubemagritte.surwww.com/](http://nubemagritte.surwww.com/)

## About

Nube Magritte is a web-based artwork that transforms individual visitors into participants of a collective experience. When users reveal their geographical location, they attract a cloud that wanders erratically across the map, moving from one user's position to another's. The cloud's location at any moment is the result of a dispute between those who invoke it, creating a form of memory in its changing position—a synthesis of the traces left by users in their passage.

The experience ultimately reduces to the mere contemplation of its journey, the observation of its light displacement across that landscape. But we must not forget what common sense indicates: putting oneself in the path of a stone thrown into the air is madness. The cloud that pretends rigidity abandons its vaporous character and becomes solid. Then it could fall.

> *"El filoso cielo de la Alta Provenza, que a las nueve de la noche guardaba todavía mucho sol y un cuarto creciente de luna, la nube Magritte estaba exactamente suspendida sobre Cazeneuve y entonces sentí una vez más que la pálida naturaleza imitaba al arte ardiente y que esa nube plagiaba la suspensión vital siempre ominosa en Magritte..."*

## Concept

This work bridges the gap between René Magritte's marble cloud images and the situations imagined by Cortázar in his texts. It celebrates the centenary of Julio Cortázar's birth, presenting a web-art piece that explores:

- **Collective interaction** - Users become part of a shared experience
- **Geographic memory** - The cloud remembers and synthesizes user traces
- **Surrealist aesthetics** - Inspired by Magritte's suspended, ominous clouds
- **Literary imagination** - Drawing from Cortázar's narrative universe

## Exhibition

This work is exhibited at [Espacio Byte](https://www.espaciobyte.org/nube-magritte) as part of their digital art collection.

## Technical Implementation

### Technologies Used
- **HTML5** - Modern web standards
- **Google Maps API** - Geographic visualization and interaction
- **Geolocation API** - User position detection
- **JavaScript** - Interactive behavior and cloud movement
- **CSS3** - Visual styling and animations

### Core Features
- **Real-time geolocation** - Detects user position
- **Dynamic cloud movement** - Calculates paths between users
- **Collective memory** - Synthesizes multiple user positions
- **Satellite view** - Google Maps integration for landscape visualization

## Setup & Installation

### Prerequisites
- Modern web browser with JavaScript enabled
- Google Maps API key
- Geolocation permissions

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/ignacioguerra/nubemagritte.git
   cd nubemagritte
   ```

2. **Configure API Keys**
   
   The project uses a template-based configuration system. For local development, you can:
   
   **Option A: Use the template (recommended)**
   - Edit `config.template.js` and replace the placeholders with your actual values:
     ```javascript
     const config = {
       GOOGLE_MAPS_API_KEY: 'your-google-maps-api-key-here',
       API_ENDPOINT_URL: 'your-api-endpoint-url'
     };
     ```
   
   - Then run the build script to generate `config.js`:
     ```bash
     npm run build
     ```
   
   **Option B: Create config.js manually**
   - Create `config.js` directly with your API keys:
     ```javascript
     const config = {
       GOOGLE_MAPS_API_KEY: 'your-google-maps-api-key-here',
       API_ENDPOINT_URL: 'your-api-endpoint-url'
     };
     window.config = config;
     ```
   
   For production deployment, set the environment variables in your hosting platform (e.g., Netlify) and the build process will automatically generate the config file.

3. **Open in Browser**
   
   Open `index.html` in your web browser or serve locally:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## How It Works

1. **User Arrival** - When a visitor accesses the site, their location is detected
2. **Cloud Attraction** - The cloud is drawn toward the user's position
3. **Collective Movement** - As more users join, the cloud moves between them
4. **Memory Synthesis** - The cloud's position becomes a synthesis of all user traces
5. **Contemplation** - Users observe the cloud's wandering journey across the landscape

##  Artistic Context

This work exists at the intersection of:
- **Digital art** - Web-based interactive experience
- **Surrealism** - Magritte's suspended, ominous clouds
- **Literature** - Cortázar's narrative imagination
- **Collective behavior** - Emergent patterns from individual interactions

## Artist

**Ignacio Guerra** (Buenos Aires, Argentina, 1988)
- Artist and programmer
- Licentiate in Electronic Arts
- Professor and researcher at Universidad Nacional de Tres de Febrero (UNTREF)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

This is an artistic project, but technical contributions are welcome. Please feel free to submit issues or pull requests for:
- Bug fixes
- Performance improvements
- Documentation updates
- Accessibility enhancements

## Support

For questions about the artistic concept or technical implementation, please open an issue on GitHub.

> *"Se espera, escondido en el pasto, a que una gran nube de la especie cúmulo se sitúe sobre la ciudad aborrecida. Se dispara entonces la flecha petrificadora, la nube se convierte en mármol, y el resto no merece comentario."* - Julio Cortázar

*Celebrando el centenario del nacimiento de Julio Cortázar*
