import { SliderBox } from "react-native-image-slider-box";

<
View style = {
    { marginHorizontal: moderateScale(15) } }
onLayout = { this.onLayout } >
    <
    SliderBox
images = { this.state.images }
sliderBoxHeight = { 300 }
onCurrentImagePressed = {
    (index) =>
    console.log(`image ${index} pressed`)
}
onCurrentImagePressed = { index => console.warn(`image ${index} pressed`) }
currentImageEmitter = { index => console.warn(`current pos is: ${index}`) }
sliderBoxHeight = { 200 }
dotColor = "#FFEE58"
inactiveDotColor = "#90A4AE"
dotStyle = {
    {
        width: 15,
        height: 15,
        borderRadius: 15,
        marginHorizontal: 10,
        padding: 0,
        margin: 0
    }
}
paginationBoxStyle = {
    {
        position: "absolute",
        bottom: 0,
        padding: 0,
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        paddingVertical: 10
    }
}
paginationBoxVerticalPadding = { 20 }
autoplay
circleLoop
ImageComponentStyle = {
    { borderRadius: 15, width: '97%', marginTop: 5 } }
imageLoadingColor = "#2196F3"
parentWidth = { this.state.width }
/> <
/View>

this.state = {
    width: '',
    images: [
        "https://source.unsplash.com/1024x768/?nature",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree",
    ],
}