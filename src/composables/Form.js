import {
    ref,
    onMounted
} from "vue";
import {
    useRoute
} from "vue-router";

export default (
    emit
) => {
    onMounted(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
    const route = useRoute();
    const post = ref({
        category: "",
        title: "",
        description: "",
        url: "",
    });
    const postWithId = ref({
        category: post.value.category,
        title: post.value.title,
        description: post.value.description,
        url: post.value.url,
        id: route.params.id,
    });
    const setpost = () => {
        emit("sendPost", post.value);
        emit("sendPostById", postWithId.value);
    };
    const previewFiles = (event) => {
        post.value.url = event.target.files[0].name;
    };

    return {
        post,
        postWithId,
        setpost,
        previewFiles
    };
}