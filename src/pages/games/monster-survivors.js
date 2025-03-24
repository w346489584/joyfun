import Head from 'next/head';
import Layout from '../../components/layout/Layout';
import GameEmbed from '../../components/game/GameEmbed';
import SEO from '../../components/layout/SEO';

export default function MonsterSurvivors() {
  // Game metadata
  const gameData = {
    title: "Monster Survivors",
    description: "Battle endless waves of monsters in this action-packed survival game!",
    iframeUrl: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
    canonicalUrl: "https://joyfun.space/games/monster-survivors",
    width: "100%",
    height: "600px",
    categories: ["Action", "Survival", "Adventure"],
    releaseDate: "2023",
    developer: "JoyFun Games",
    controls: "WASD or arrow keys to move, weapons fire automatically",
    rating: "4.8/5"
  };

  return (
    <>
      <SEO 
        title={`${gameData.title} - Play Online at JoyFun.space`}
        description={gameData.description}
        canonicalUrl={gameData.canonicalUrl}
      />
      
      <Layout>
        <div className="game-container mx-auto px-4 py-8 max-w-6xl">
          {/* Game Title Section */}
          <section className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-apple-dark mb-4">
              {gameData.title}
            </h1>
            <p className="text-lg md:text-xl text-apple-gray-700 mb-4">
              {gameData.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {gameData.categories.map((category) => (
                <span key={category} className="bg-apple-blue-100 text-apple-blue-600 px-3 py-1 rounded-full text-sm">
                  {category}
                </span>
              ))}
            </div>
          </section>

          {/* Game Embed Section */}
          <section className="mb-8 bg-apple-gray-50 p-2 rounded-xl shadow-lg">
            <GameEmbed 
              url={gameData.iframeUrl} 
              title={gameData.title}
              width={gameData.width}
              height={gameData.height}
            />
            <div className="bg-apple-gray-100 p-4 mt-2 rounded-lg">
              <p className="text-sm text-apple-gray-600">
                <span className="font-semibold">Controls:</span> {gameData.controls}
              </p>
            </div>
          </section>

          {/* Game Details Section */}
          <section className="mb-8 grid md:grid-cols-2 gap-8">
            <div className="game-info">
              <h2 className="text-2xl font-bold text-apple-dark mb-4">About Monster Survivors</h2>
              <div className="prose text-apple-gray-800">
                <p className="mb-4">
                  Monster Survivors is an exciting action-packed survival game where you face endless waves of increasingly difficult monsters. Test your skills and see how long you can survive in this challenging adventure!
                </p>
                <p className="mb-4">
                  The game features stunning graphics, intuitive controls, and progressively challenging gameplay that will keep you engaged for hours. Collect power-ups, upgrade your abilities, and discover new weapons as you battle through hordes of unique monsters.
                </p>
                <p>
                  With its addictive gameplay loop and endless replayability, Monster Survivors offers a perfect balance of casual fun and strategic depth. Can you become the ultimate survivor?
                </p>
              </div>
            </div>
            
            <div className="game-features">
              <h2 className="text-2xl font-bold text-apple-dark mb-4">Game Features</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-apple-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Endless survival gameplay with increasing difficulty</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-apple-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Multiple character classes with unique abilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-apple-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dozens of upgradeable weapons and items</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-apple-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Beautiful pixel art graphics and immersive sound design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-apple-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Cross-device compatibility for play anywhere</span>
                </li>
              </ul>
              
              <div className="mt-6 bg-apple-gray-100 p-4 rounded-lg">
                <h2 className="text-xl font-semibold text-apple-dark mb-2">Game Details</h2>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-apple-gray-600">Developer:</div>
                  <div>{gameData.developer}</div>
                  <div className="text-apple-gray-600">Release Date:</div>
                  <div>{gameData.releaseDate}</div>
                  <div className="text-apple-gray-600">Player Rating:</div>
                  <div className="flex items-center">
                    {gameData.rating}
                    <span className="ml-1 text-yellow-500">★★★★★</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* How to Play Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-apple-dark mb-4">How to Play</h2>
            <div className="bg-apple-blue-50 p-6 rounded-xl">
              <div className="prose text-apple-gray-800 max-w-none">
                <p className="mb-4">
                  <span className="font-semibold">1. Movement:</span> Use WASD or arrow keys to move your character through the game world.
                </p>
                <p className="mb-4">
                  <span className="font-semibold">2. Combat:</span> Your character attacks automatically when enemies are in range. Focus on positioning yourself strategically to maximize damage while avoiding enemies.
                </p>
                <p className="mb-4">
                  <span className="font-semibold">3. Level Up:</span> Collect experience points by defeating monsters. When you level up, choose from a selection of upgrades and new abilities.
                </p>
                <p className="mb-4">
                  <span className="font-semibold">4. Items:</span> Collect power-ups that appear throughout the game to boost your stats and give you special abilities.
                </p>
                <p>
                  <span className="font-semibold">5. Survive:</span> The game gets progressively harder over time. Use all your skills and upgrades to survive as long as possible!
                </p>
              </div>
            </div>
          </section>
          
          {/* FAQ Section */}
          <section>
            <h2 className="text-2xl font-bold text-apple-dark mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-apple-dark">Is Monster Survivors free to play?</h3>
                <p className="text-apple-gray-700 mt-2">Yes, Monster Survivors is completely free to play in your browser. No downloads or purchases are required.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-apple-dark">Can I play Monster Survivors on mobile devices?</h3>
                <p className="text-apple-gray-700 mt-2">Yes, Monster Survivors is fully optimized for both desktop and mobile play. Enjoy the game on any device with a web browser.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-apple-dark">Are there in-game purchases?</h3>
                <p className="text-apple-gray-700 mt-2">No, there are no in-game purchases. All game content is available from the start.</p>
              </div>
              <div className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-apple-dark">Does my progress save?</h3>
                <p className="text-apple-gray-700 mt-2">Your highest score is saved in your browser's local storage. For full profile saving, you can create a JoyFun account.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
} 