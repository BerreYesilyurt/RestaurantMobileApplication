import axios from "axios";

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization:'Bearer p7PXUCnZpjsOf-4aTRhG1khJiXf7FTMKe0m0td5bnP-jAEviCRfpNkhUIvCNTHYVH2jLEuJz9kOUyW49DQkKaQkCc_g4EKUFUeEh12kPExHVLtXCNXGRQ8M0WG2OZXYx',
    },
})