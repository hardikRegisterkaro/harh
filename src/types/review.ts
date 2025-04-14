interface Review {
    rating: number;
    text: string;
    author: {
        name: string;
        position: string;
        initials: string;
    };
}

export default Review;