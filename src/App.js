import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

/**
 * The top-level component of the app, which renders a header, articles, and a footer.
 */
function App() {
  return (
    <div>
      {/* The header component renders the page title and navigation links. */}
      <Header />
      <main>
        {/* The first article component renders a blog post with a date, title, image, and text. */}
        <Article 
          date="11/12/20"
          title="On the Street in Brooklyn"
          image={{ src: "blog-image-1.jpg", alt: "Woman in red dress" }}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Tempus curabitur mus curabitur feugiat efficitur congue. Elit donec lacus tellus lectus sit nunc? Luctus cras primis mollis porttitor sapien. Leo etiam volutpat penatibus vehicula litora. Ornare rutrum pellentesque; sagittis vestibulum ut adipiscing. Scelerisque sapien habitant dui; neque ad massa. Mauris at vehicula mauris suscipit eleifend rhoncus mattis ante cursus. Feugiat venenatis lectus nec molestie sapien pretium proin. Eros ex non finibus metus nec fermentum. Netus aptent senectus commodo viverra facilisis malesuada egestas mauris."
          readMoreLink="#readmore1"
        />
        {/* The second article component renders a blog post with a date, title, image, and text. */}
        <Article 
          date="11/11/20"
          title="Vintage in Vogue"
          image={{ src: "blog-image-2.jpg", alt: "Fashion group" }}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Mollis torquent magna molestie, magnis curabitur feugiat ullamcorper fames. Platea dui luctus taciti venenatis luctus porttitor magnis vulputate suscipit. Laoreet fusce nulla interdum conubia vehicula lacus tempus feugiat. Nostra ligula hendrerit proin vehicula; quam quam aliquam. Vestibulum cursus felis mus luctus; tortor pretium. Urna volutpat posuere penatibus dui enim. Vivamus habitant quam, erat efficitur posuere ridiculus laoreet libero. Fusce taciti sapien dolor nulla ante imperdiet lorem aliquet augue!"
          readMoreLink="#readmore2"
        />
      </main>
      {/* The footer component renders a copyright notice and navigation links. */}
      <Footer />
    </div>
  );
}

export default App;
