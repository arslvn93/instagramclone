import React from 'react'

export default function Profile() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        fetch('https://insta-profile-caa84-default-rtdb.firebaseio.com/posts.json').then(res => res.json())
        .then(res => {
            if (res != null) {
                const items = [];
                Object.entries(res).map(item => {
                    items.push(item[1]);
                })
                setPosts(items.reverse());
            }
        })
    }


    return (
        <div class="main mb-5">
            <div class="">
                <div class="w-75 pt-5 profile">
                    <div class="profile_image">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU" />
                    </div>
                    <div class="mt-3">
                        <p class="username">itsdeveloper6</p>
                        <div>
                            <h5 class="name">Hamza Javed</h5>
                            <p class='description d-md-block d-none'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </div>
                <p class='description pt-2 w-100 mx-4 d-md-none d-block' style={{paddingRight: '30px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                <div style={{border: '1px solid rgba(0,0,0,0.1)'}} class="mt-3 w-75 mx-auto" />
                <div style={{borderTop: '1px solid black', width: 70}} class="d-flex mx-auto align-items-center justify-content-center pt-4">
                    <svg aria-label="" class="_8-yf5 " color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><rect fill="none" height="18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                    <span class="mx-1" style={{fontSize: '13px', fontWeight: '500'}}>POSTS</span>
                </div>

                <div class="row posts w-75 mx-auto">
                    {posts.map(item => (
                        <img class="col-md-4 mt-3" style={{cursor: 'pointer'}} onClick={() => window.open(item.url, "_blank")} src={item.image} />
                    ))}
                </div>
            </div>
        </div>
    )
}
