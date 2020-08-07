import React from 'react'
import './Post.css';
function Post() {
    return (
        <div className="post__container">
            {/* Header -> News Icon + Network Name */}
            <div className="post_header">
            <h2>Fox News LLC</h2>

            </div>
            
            {/* Image */}
            <img 
            className="post__image"
            src="https://images3.alphacoders.com/108/thumb-1920-1085992.jpg"
            />
            {/* Description + Text */}
                <p>Presumptive Democratic presidential nominee Joe Biden doubled down on his praise of "diversity" within the Latino community "unlike" the Black community.


Speaking virtually on Thursday to the National Association of Latino Elected Officials conference, the former VP vowed that his administration will reflect "the full diversity of this nation" as well as "the full diversity of the Latino communities."

"Now what I mean full diversity, unlike the African American community and many other communities, you're from everywhere," Biden explained. "You're from Europe, from the tip of South America, all the way to our border in Mexico, and the Caribbean. And different backgrounds, different ethnicities, but all Latinos. We're gonna get a chance to do that if we win in November."</p>
        </div>
    )
}

export default Post
