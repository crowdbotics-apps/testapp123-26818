import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_0_3092}>
        <Text style={styles.Text_0_3092}>Payment Info</Text>
      </View>
      <View style={styles.View_0_3093}>
        <Text style={styles.Text_0_3093}>Contact Info</Text>
      </View>
      <View style={styles.View_0_3094}>
        <Text style={styles.Text_0_3094}>Your Order</Text>
      </View>
      <View style={styles.View_0_3095}>
        <Text style={styles.Text_0_3095}>Edit</Text>
      </View>
      <View style={styles.View_0_3096}>
        <Text style={styles.Text_0_3096}>Edit</Text>
      </View>
      <View style={styles.View_0_3097} />
      <View style={styles.View_0_3098} />
      <View style={styles.View_0_3099} />
      <View style={styles.View_0_3100}>
        <View style={styles.View_0_3101} />
        <View style={styles.View_0_3102}>
          <Text style={styles.Text_0_3102}>place order</Text>
        </View>
      </View>
      <View style={styles.View_0_3103}>
        <Text style={styles.Text_0_3103}>
          You will need to confirm the payment after the formation of your
          order.
        </Text>
      </View>
      <View style={styles.View_0_3104}>
        <Text style={styles.Text_0_3104}>Cardholder name</Text>
      </View>
      <View style={styles.View_0_3105}>
        <Text style={styles.Text_0_3105}>Expiration date</Text>
      </View>
      <View style={styles.View_0_3106}>
        <Text style={styles.Text_0_3106}>07/23</Text>
      </View>
      <View style={styles.View_0_3107}>
        <Text style={styles.Text_0_3107}>Alexandre Katherey</Text>
      </View>
      <View style={styles.View_0_3108}>
        <Text style={styles.Text_0_3108}>Card number</Text>
      </View>
      <View style={styles.View_0_3109}>
        <Text style={styles.Text_0_3109}>cvc</Text>
      </View>
      <View style={styles.View_0_3110}>
        <Text style={styles.Text_0_3110}>333</Text>
      </View>
      <View style={styles.View_0_3111}>
        <Text style={styles.Text_0_3111}>1290 9182 9182 0990</Text>
      </View>
      <View style={styles.View_0_3112}>
        <View style={styles.View_0_3113} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69de/dc8e/60e8280617a149087aaf9f1c6fb26976"
          }}
          style={styles.ImageBackground_0_3114}
        />
      </View>
      <View style={styles.View_0_3115}>
        <View style={styles.View_0_3116} />
        <View style={styles.View_0_3117}>
          <View style={styles.View_0_3118}>
            <Text style={styles.Text_0_3118}>Chicken Supreme (L)</Text>
          </View>
          <View style={styles.View_0_3119}>
            <Text style={styles.Text_0_3119}>$20.34</Text>
          </View>
          <View style={styles.View_0_3120}>
            <Text style={styles.Text_0_3120}>Notes: Extra Cheese</Text>
          </View>
          <View style={styles.View_0_3121}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/c8c0/77962fd4f20d1490295d011e35c9ae54"
              }}
              style={styles.ImageBackground_0_3122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf6f/b8a3/bf21537110f8248a8a7408bc18dc52db"
              }}
              style={styles.ImageBackground_0_3123}
            />
          </View>
          <View style={styles.View_0_3124}>
            <Text style={styles.Text_0_3124}>X 2</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec0d/a55c/13b6fb797fa417f2bed28f6a2e414501"
            }}
            style={styles.ImageBackground_0_3125}
          />
        </View>
        <View style={styles.View_0_3126}>
          <View style={styles.View_0_3127}>
            <Text style={styles.Text_0_3127}>Soda</Text>
          </View>
          <View style={styles.View_0_3128}>
            <Text style={styles.Text_0_3128}>$1.12</Text>
          </View>
          <View style={styles.View_0_3129}>
            <Text style={styles.Text_0_3129}>Notes: Zero Coke</Text>
          </View>
          <View style={styles.View_0_3130}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/c8c0/77962fd4f20d1490295d011e35c9ae54"
              }}
              style={styles.ImageBackground_0_3131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a943/06a0/bf49d503bbf62de7e6c84984c15969a5"
              }}
              style={styles.ImageBackground_0_3132}
            />
          </View>
          <View style={styles.View_0_3133}>
            <Text style={styles.Text_0_3133}>X 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec0d/a55c/13b6fb797fa417f2bed28f6a2e414501"
            }}
            style={styles.ImageBackground_0_3134}
          />
        </View>
        <View style={styles.View_0_3135}>
          <View style={styles.View_0_3136}>
            <Text style={styles.Text_0_3136}>Seafood Pasta (L)</Text>
          </View>
          <View style={styles.View_0_3137}>
            <Text style={styles.Text_0_3137}>$8.70</Text>
          </View>
          <View style={styles.View_0_3138}>
            <Text style={styles.Text_0_3138}>
              Notes:No chilly pepper, for children
            </Text>
          </View>
          <View style={styles.View_0_3139}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/885e/c8c0/77962fd4f20d1490295d011e35c9ae54"
              }}
              style={styles.ImageBackground_0_3140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a943/06a0/bf49d503bbf62de7e6c84984c15969a5"
              }}
              style={styles.ImageBackground_0_3141}
            />
          </View>
          <View style={styles.View_0_3142}>
            <Text style={styles.Text_0_3142}>X 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec0d/a55c/13b6fb797fa417f2bed28f6a2e414501"
            }}
            style={styles.ImageBackground_0_3143}
          />
        </View>
      </View>
      <View style={styles.View_0_3144}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a126/7489/8724aa75808bfc4e08bb41d8d4f694e3"
          }}
          style={styles.ImageBackground_0_3145}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cddd/c08a/61243108a656eb9742aa5249956dda9a"
          }}
          style={styles.ImageBackground_0_3146}
        />
      </View>
      <View style={styles.View_0_3147}>
        <Text style={styles.Text_0_3147}>TOTAL</Text>
      </View>
      <View style={styles.View_0_3148}>
        <Text style={styles.Text_0_3148}>$30.60</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/370d/6e59/7d9700abadd5b70d6b9accf2d0a1b0bc"
        }}
        style={styles.ImageBackground_0_3149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/370d/6e59/7d9700abadd5b70d6b9accf2d0a1b0bc"
        }}
        style={styles.ImageBackground_0_3150}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/370d/6e59/7d9700abadd5b70d6b9accf2d0a1b0bc"
        }}
        style={styles.ImageBackground_0_3151}
      />
      <View style={styles.View_0_3152}>
        <Text style={styles.Text_0_3152}>1</Text>
      </View>
      <View style={styles.View_0_3153}>
        <Text style={styles.Text_0_3153}>2</Text>
      </View>
      <View style={styles.View_0_3154}>
        <Text style={styles.Text_0_3154}>3</Text>
      </View>
      <View style={styles.View_0_3155}>
        <View style={styles.View_0_3156}>
          <Text style={styles.Text_0_3156}>First Name</Text>
        </View>
        <View style={styles.View_0_3157} />
        <View style={styles.View_0_3158}>
          <Text style={styles.Text_0_3158}>John</Text>
        </View>
      </View>
      <View style={styles.View_0_3159}>
        <View style={styles.View_0_3160}>
          <Text style={styles.Text_0_3160}>Phone</Text>
        </View>
        <View style={styles.View_0_3161} />
        <View style={styles.View_0_3162}>
          <Text style={styles.Text_0_3162}>0956 683 XXXX</Text>
        </View>
      </View>
      <View style={styles.View_0_3163}>
        <View style={styles.View_0_3164}>
          <Text style={styles.Text_0_3164}>Email</Text>
        </View>
        <View style={styles.View_0_3165} />
        <View style={styles.View_0_3166}>
          <Text style={styles.Text_0_3166}>john@gmail.cm</Text>
        </View>
      </View>
      <View style={styles.View_0_3167}>
        <View style={styles.View_0_3168}>
          <Text style={styles.Text_0_3168}>Address</Text>
        </View>
        <View style={styles.View_0_3169} />
        <View style={styles.View_0_3170}>
          <Text style={styles.Text_0_3170}>
            Your detailed address for delivery
          </Text>
        </View>
      </View>
      <View style={styles.View_0_3171}>
        <View style={styles.View_0_3172}>
          <Text style={styles.Text_0_3172}>Last Name</Text>
        </View>
        <View style={styles.View_0_3173} />
        <View style={styles.View_0_3174}>
          <Text style={styles.Text_0_3174}>Smith</Text>
        </View>
      </View>
      <View style={styles.View_0_3175}>
        <View style={styles.View_0_3176} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/520a/1272/6c1d39ecc9a339fa37e698bb2e0fd6c6"
          }}
          style={styles.ImageBackground_0_3177}
        />
        <View style={styles.View_0_3178}>
          <Text style={styles.Text_0_3178}>Checkout</Text>
        </View>
        <View style={styles.View_0_3179}>
          <Text style={styles.Text_0_3179}></Text>
        </View>
        <View style={styles.View_0_3180}>
          <View style={styles.View_0_3181} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3182}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3184}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3186}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3188}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3190}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3192}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3194}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3196}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3198}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3200}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3204}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3206}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3208}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3210}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3212}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3214}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3216}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3220}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3222}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3224}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3226}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3228}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3230}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3232}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3234}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3236}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3238}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3240}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3242}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3244}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3246}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3248}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca31/a698/f000e00b214114241edfa3cac06edbc8"
            }}
            style={styles.ImageBackground_0_3250}
          />
        </View>
        <View style={styles.View_0_3252}>
          <View style={styles.View_0_3253} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3254}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3256}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3258}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3260}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3262}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3264}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3266}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3268}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3270}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3272}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3274}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3276}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3278}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3280}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3282}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3284}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8dc4/50cc/61877cbb9f2f58e52f9f5dd47976d48a"
            }}
            style={styles.ImageBackground_0_3286}
          />
        </View>
        <View style={styles.View_0_3288}>
          <Text style={styles.Text_0_3288}>Date: Total Bill:</Text>
        </View>
        <View style={styles.View_0_3289}>
          <Text style={styles.Text_0_3289}>March 11, 2020 $30.60</Text>
        </View>
        <View style={styles.View_0_3290}>
          <View style={styles.View_I0_3290_0_6219} />
          <View style={styles.View_I0_3290_0_6220}>
            <View style={styles.View_I0_3290_0_6221}>
              <View style={styles.View_I0_3290_0_6222}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_3290_0_6224}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f6a/9013/2658b8e42deceb0bebcddd4b46a4dc47"
                  }}
                  style={styles.ImageBackground_I0_3290_0_6223}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a02/d55a/37a1d17d556c3c93c2b0df651bda2636"
                  }}
                  style={styles.ImageBackground_I0_3290_0_6225}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ea84/59ae/a423320407e21fa0f29a5f4642de03e9"
                }}
                style={styles.ImageBackground_I0_3290_0_6227}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6967/7037/90a6e0f763f82e211faae38605d9aa1a"
                }}
                style={styles.ImageBackground_I0_3290_0_6231}
              />
            </View>
            <View style={styles.View_I0_3290_0_6235}>
              <Text style={styles.Text_I0_3290_0_6235}>100%</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9248/4253/f8ec7c39d8a8870310bc76564f566d04"
              }}
              style={styles.ImageBackground_I0_3290_0_6238}
            />
          </View>
          <View style={styles.View_I0_3290_0_6240}>
            <Text style={styles.Text_I0_3290_0_6240}>9:41 AM</Text>
          </View>
          <View style={styles.View_I0_3290_0_6241}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f6d/ed76/245b2ff134d7d972559eab576bc51171"
              }}
              style={styles.ImageBackground_I0_3290_0_6244}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07f8/6458/d1e84c0dafff1db6e370300596ee96b4"
              }}
              style={styles.ImageBackground_I0_3290_0_6249}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("256.9672131147541%") },
  View_0_3092: {
    width: wp("32.244897959183675%"),
    minWidth: wp("32.244897959183675%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.775510204081634%"),
    top: hp("125.95628415300546%")
  },
  Text_0_3092: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3093: {
    width: wp("30.612244897959183%"),
    minWidth: wp("30.612244897959183%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.591836734693878%"),
    top: hp("38.9344262295082%")
  },
  Text_0_3093: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3094: {
    width: wp("26.93877551020408%"),
    minWidth: wp("26.93877551020408%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.775510204081634%"),
    top: hp("166.80327868852459%")
  },
  Text_0_3094: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3095: {
    width: wp("7.142857142857142%"),
    minWidth: wp("7.142857142857142%"),
    minHeight: hp("5.59371573026063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.12244897959184%"),
    top: hp("126.63934426229508%")
  },
  Text_0_3095: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3096: {
    width: wp("7.142857142857142%"),
    minWidth: wp("7.142857142857142%"),
    minHeight: hp("5.59371573026063%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86.12244897959184%"),
    top: hp("167.4863387978142%")
  },
  Text_0_3096: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3097: {
    width: wp("102.24489795918367%"),
    minWidth: wp("102.24489795918367%"),
    height: hp("26.912568306010932%"),
    minHeight: hp("26.912568306010932%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2448979591836733%"),
    top: hp("132.92349726775956%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3098: {
    width: wp("102.24489795918367%"),
    minWidth: wp("102.24489795918367%"),
    height: hp("52.595628415300546%"),
    minHeight: hp("52.595628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2448979591836733%"),
    top: hp("173.77049180327867%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3099: {
    width: wp("102.24489795918367%"),
    minWidth: wp("102.24489795918367%"),
    height: hp("64.89071038251366%"),
    minHeight: hp("64.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.2448979591836733%"),
    top: hp("46.03825136612022%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3100: {
    width: wp("56.326530612244895%"),
    minWidth: wp("56.326530612244895%"),
    height: hp("7.369672014413635%"),
    minHeight: hp("7.369672014413635%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.836734693877553%"),
    top: hp("240.98360655737702%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3101: {
    flexGrow: 1,
    width: wp("56.326530612244895%"),
    height: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 94, 83, 1)",
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  View_0_3102: {
    width: wp("26.122448979591837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.897959183673471%"),
    top: hp("1.7759562841530396%")
  },
  Text_0_3102: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3103: {
    width: wp("56.326530612244895%"),
    minWidth: wp("56.326530612244895%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.53061224489796%"),
    top: hp("135.38251366120218%")
  },
  Text_0_3103: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3104: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("143.85245901639345%")
  },
  Text_0_3104: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3105: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("151.22950819672133%")
  },
  Text_0_3105: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3106: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("153.96174863387978%")
  },
  Text_0_3106: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3107: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("146.5846994535519%")
  },
  Text_0_3107: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3108: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.04081632653062%"),
    top: hp("143.85245901639345%")
  },
  Text_0_3108: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3109: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.04081632653062%"),
    top: hp("151.22950819672133%")
  },
  Text_0_3109: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3110: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.04081632653062%"),
    top: hp("153.96174863387978%")
  },
  Text_0_3110: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3111: {
    width: wp("36.53061224489796%"),
    minWidth: wp("36.53061224489796%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.04081632653062%"),
    top: hp("146.5846994535519%")
  },
  Text_0_3111: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_0_3112: {
    width: wp("21.428571428571427%"),
    minWidth: wp("21.428571428571427%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("134.15300546448088%")
  },
  View_0_3113: {
    width: wp("21.428571428571427%"),
    minWidth: wp("21.428571428571427%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_0_3114: {
    width: wp("21.428571428571427%"),
    minWidth: wp("21.428571428571427%"),
    height: hp("8.333333333333332%"),
    minHeight: hp("8.333333333333332%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3115: {
    width: wp("86.12244897959184%"),
    minWidth: wp("86.12244897959184%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.73469387755102%"),
    top: hp("178.82513661202185%")
  },
  View_0_3116: {
    width: wp("86.12244897959184%"),
    minWidth: wp("86.12244897959184%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_0_3117: {
    width: wp("86.12244897959184%"),
    minWidth: wp("86.12244897959184%"),
    height: hp("43.44262295081967%"),
    minHeight: hp("43.44262295081967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3118: {
    width: wp("35.91836734693877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.81632653061224%"),
    top: hp("0.9562841530054698%")
  },
  Text_0_3118: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3119: {
    width: wp("11.63265306122449%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.46938775510203%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3119: {
    color: "rgba(0, 168, 7, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3120: {
    width: wp("31.22448979591837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.22448979591837%"),
    top: hp("4.371584699453564%")
  },
  Text_0_3120: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3121: {
    width: wp("17.551020408163264%"),
    minWidth: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_3122: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_3123: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3124: {
    width: wp("5.3061224489795915%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.265306122448976%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3124: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_3125: {
    width: wp("74.28571428571429%"),
    height: hp("0%"),
    top: hp("13.592896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_3126: {
    width: wp("80.81632653061224%"),
    minWidth: wp("80.81632653061224%"),
    height: hp("13.59289617486339%"),
    minHeight: hp("13.59289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.573770491803288%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3127: {
    width: wp("35.91836734693877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.81632653061224%"),
    top: hp("0.9562841530054698%")
  },
  Text_0_3127: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3128: {
    width: wp("7.346938775510205%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.46938775510203%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3128: {
    color: "rgba(0, 168, 7, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3129: {
    width: wp("31.22448979591837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.22448979591837%"),
    top: hp("4.3715846994535354%")
  },
  Text_0_3129: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3130: {
    width: wp("17.551020408163264%"),
    minWidth: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_3131: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_3132: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3133: {
    width: wp("4.489795918367347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.265306122448976%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3133: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_3134: {
    width: wp("74.28571428571429%"),
    height: hp("0%"),
    top: hp("13.592896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_3135: {
    width: wp("83.06122448979592%"),
    minWidth: wp("83.06122448979592%"),
    height: hp("13.59289617486339%"),
    minHeight: hp("13.59289617486339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.147540983606547%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3136: {
    width: wp("35.91836734693877%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.81632653061224%"),
    top: hp("0.9562841530054982%")
  },
  Text_0_3136: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3137: {
    width: wp("9.591836734693878%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.46938775510203%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3137: {
    color: "rgba(0, 168, 7, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3138: {
    width: wp("31.22448979591837%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.22448979591837%"),
    top: hp("4.234972677595664%")
  },
  Text_0_3138: {
    color: "rgba(109, 116, 119, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3139: {
    width: wp("17.551020408163264%"),
    minWidth: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_3140: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_3141: {
    width: wp("17.551020408163264%"),
    height: hp("11.748633879781421%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_3142: {
    width: wp("4.489795918367347%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.265306122448976%"),
    top: hp("1.229508196721298%")
  },
  Text_0_3142: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_3143: {
    width: wp("74.28571428571429%"),
    height: hp("0%"),
    top: hp("13.592896174863398%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_3144: {
    width: wp("16.3265306122449%"),
    minWidth: wp("16.3265306122449%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("209.8360655737705%")
  },
  ImageBackground_0_3145: {
    width: wp("16.3265306122449%"),
    minWidth: wp("16.3265306122449%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_3146: {
    width: wp("16.3265306122449%"),
    minWidth: wp("16.3265306122449%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_3147: {
    width: wp("16.93877551020408%"),
    minWidth: wp("16.93877551020408%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("230.327868852459%")
  },
  Text_0_3147: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3148: {
    width: wp("16.93877551020408%"),
    minWidth: wp("16.93877551020408%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91836734693878%"),
    top: hp("230.327868852459%")
  },
  Text_0_3148: {
    color: "rgba(0, 168, 7, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_3149: {
    width: wp("8.571428571428571%"),
    minWidth: wp("8.571428571428571%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("38.25136612021858%")
  },
  ImageBackground_0_3150: {
    width: wp("8.571428571428571%"),
    minWidth: wp("8.571428571428571%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("125.13661202185793%")
  },
  ImageBackground_0_3151: {
    width: wp("8.571428571428571%"),
    minWidth: wp("8.571428571428571%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("166.12021857923497%")
  },
  View_0_3152: {
    width: wp("2.0408163265306123%"),
    minWidth: wp("2.0408163265306123%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.204081632653061%"),
    top: hp("38.79781420765027%")
  },
  Text_0_3152: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3153: {
    width: wp("2.857142857142857%"),
    minWidth: wp("2.857142857142857%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.795918367346939%"),
    top: hp("125.68306010928963%")
  },
  Text_0_3153: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3154: {
    width: wp("3.061224489795918%"),
    minWidth: wp("3.061224489795918%"),
    minHeight: hp("8.049453672815542%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.795918367346939%"),
    top: hp("166.66666666666669%")
  },
  Text_0_3154: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3155: {
    width: wp("41.63265306122449%"),
    minWidth: wp("41.63265306122449%"),
    height: hp("10.784972560861723%"),
    minHeight: hp("10.784972560861723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("49.31693989071038%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3156: {
    width: wp("17.142857142857142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("0%")
  },
  Text_0_3156: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3157: {
    flexGrow: 1,
    width: wp("41.63265306122449%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3158: {
    width: wp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("5.191256830601098%")
  },
  Text_0_3158: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3159: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    height: hp("10.784972560861723%"),
    minHeight: hp("10.784972560861723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("61.47540983606557%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3160: {
    width: wp("9.795918367346939%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("0%")
  },
  Text_0_3160: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3161: {
    flexGrow: 1,
    width: wp("85.71428571428571%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448087%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3162: {
    width: wp("25.71428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("5.191256830601084%")
  },
  Text_0_3162: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3163: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    height: hp("10.784972560861723%"),
    minHeight: hp("10.784972560861723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("73.49726775956285%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3164: {
    width: wp("8.16326530612245%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("0%")
  },
  Text_0_3164: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3165: {
    flexGrow: 1,
    width: wp("85.71428571428571%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.41530054644808%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3166: {
    width: wp("24.693877551020407%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("5.191256830601091%")
  },
  Text_0_3166: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3167: {
    width: wp("85.71428571428571%"),
    minWidth: wp("85.71428571428571%"),
    height: hp("20.76502732240437%"),
    minHeight: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.142857142857142%"),
    top: hp("85.51912568306011%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3168: {
    width: wp("13.26530612244898%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("0%")
  },
  Text_0_3168: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3169: {
    flexGrow: 1,
    width: wp("85.71428571428571%"),
    height: hp("17.349726775956285%"),
    minHeight: hp("17.349726775956285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3170: {
    width: wp("56.326530612244895%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959187%"),
    top: hp("5.191256830601091%")
  },
  Text_0_3170: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3171: {
    width: wp("41.63265306122449%"),
    minWidth: wp("41.63265306122449%"),
    height: hp("10.784972560861723%"),
    minHeight: hp("10.784972560861723%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.22448979591837%"),
    top: hp("49.31693989071038%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3172: {
    width: wp("16.73469387755102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959116%"),
    top: hp("0%")
  },
  Text_0_3172: {
    color: "rgba(10, 31, 49, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3173: {
    flexGrow: 1,
    width: wp("41.63265306122449%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.415300546448094%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(222, 222, 223, 1)",
    borderWidth: 1
  },
  View_0_3174: {
    width: wp("9.387755102040817%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0612244897959116%"),
    top: hp("5.191256830601098%")
  },
  Text_0_3174: {
    color: "rgba(181, 181, 181, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3175: {
    width: wp("104.89795918367346%"),
    minWidth: wp("104.89795918367346%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.4489795918367347%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3176: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("33.060109289617486%"),
    minHeight: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4489795918367347%"),
    top: hp("0%"),
    backgroundColor: "rgba(236, 94, 83, 1)",
    borderColor: "rgba(112, 112, 112, 1)",
    borderWidth: 1
  },
  ImageBackground_0_3177: {
    width: wp("12.244897959183673%"),
    minWidth: wp("12.244897959183673%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.591836734693878%"),
    top: hp("6.147540983606557%")
  },
  View_0_3178: {
    width: wp("23.46938775510204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.816326530612244%"),
    top: hp("8.060109289617486%")
  },
  Text_0_3178: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3179: {
    width: wp("2.857142857142857%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.285714285714285%"),
    top: hp("9.153005464480875%")
  },
  Text_0_3179: {
    color: "rgba(236, 94, 83, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3180: {
    flexGrow: 1,
    width: wp("85.71428571428571%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.693877551020407%"),
    top: hp("17.691256830601095%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3181: {
    width: wp("85.71428571428571%"),
    height: hp("0.273224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_0_3182: {
    width: wp("85.71428571428571%"),
    height: hp("0.273224043715847%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_3184: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.4489795918367356%")
  },
  ImageBackground_0_3186: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.8979591836734695%")
  },
  ImageBackground_0_3188: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.346938775510205%")
  },
  ImageBackground_0_3190: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.795918367346937%")
  },
  ImageBackground_0_3192: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.244897959183676%")
  },
  ImageBackground_0_3194: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.693877551020408%")
  },
  ImageBackground_0_3196: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.142857142857146%")
  },
  ImageBackground_0_3198: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.591836734693878%")
  },
  ImageBackground_0_3200: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.040816326530617%")
  },
  ImageBackground_0_3202: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.489795918367342%")
  },
  ImageBackground_0_3204: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.93877551020408%")
  },
  ImageBackground_0_3206: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.387755102040813%")
  },
  ImageBackground_0_3208: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.836734693877553%")
  },
  ImageBackground_0_3210: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.285714285714285%")
  },
  ImageBackground_0_3212: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.73469387755102%")
  },
  ImageBackground_0_3214: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.183673469387756%")
  },
  ImageBackground_0_3216: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.63265306122449%")
  },
  ImageBackground_0_3218: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.08163265306123%")
  },
  ImageBackground_0_3220: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.53061224489796%")
  },
  ImageBackground_0_3222: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48.97959183673469%")
  },
  ImageBackground_0_3224: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.42857142857143%")
  },
  ImageBackground_0_3226: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.87755102040816%")
  },
  ImageBackground_0_3228: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.326530612244895%")
  },
  ImageBackground_0_3230: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.77551020408164%")
  },
  ImageBackground_0_3232: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.22448979591836%")
  },
  ImageBackground_0_3234: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.67346938775509%")
  },
  ImageBackground_0_3236: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.12244897959184%")
  },
  ImageBackground_0_3238: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.57142857142857%")
  },
  ImageBackground_0_3240: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.0204081632653%")
  },
  ImageBackground_0_3242: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.46938775510205%")
  },
  ImageBackground_0_3244: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91836734693877%")
  },
  ImageBackground_0_3246: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.36734693877551%")
  },
  ImageBackground_0_3248: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.81632653061224%")
  },
  ImageBackground_0_3250: {
    width: wp("1.2244897959183674%"),
    height: hp("0%"),
    top: hp("0.1366120218579212%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83.26530612244898%")
  },
  View_0_3252: {
    flexGrow: 1,
    width: wp("104.89795918367346%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.508196721311474%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_3253: {
    width: wp("104.89795918367346%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_0_3254: {
    width: wp("104.89795918367346%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_3256: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.326530612244898%")
  },
  ImageBackground_0_3258: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.653061224489797%")
  },
  ImageBackground_0_3260: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.979591836734695%")
  },
  ImageBackground_0_3262: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.306122448979593%")
  },
  ImageBackground_0_3264: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.63265306122449%")
  },
  ImageBackground_0_3266: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37.95918367346938%")
  },
  ImageBackground_0_3268: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.285714285714285%")
  },
  ImageBackground_0_3270: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.61224489795918%")
  },
  ImageBackground_0_3272: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.938775510204074%")
  },
  ImageBackground_0_3274: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.265306122448976%")
  },
  ImageBackground_0_3276: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.59183673469387%")
  },
  ImageBackground_0_3278: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.91836734693878%")
  },
  ImageBackground_0_3280: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82.24489795918367%")
  },
  ImageBackground_0_3282: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.57142857142857%")
  },
  ImageBackground_0_3284: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("94.89795918367346%")
  },
  ImageBackground_0_3286: {
    width: wp("10.61224567646883%"),
    height: hp("2.8688529801498994%"),
    top: hp("1.639344262295083%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("101.22448979591836%")
  },
  View_0_3288: {
    width: wp("44.08163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.591836734693878%"),
    top: hp("18.852459016393443%")
  },
  Text_0_3288: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3289: {
    width: wp("44.08163265306123%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53.673469387755105%"),
    top: hp("18.852459016393443%")
  },
  Text_0_3289: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_3290: {
    width: wp("96.73469387755102%"),
    height: hp("3.825136612021858%"),
    top: hp("1.2295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.081632653061225%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_3290_0_6219: {
    flexGrow: 1,
    width: wp("96.73469387755102%"),
    height: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(149, 152, 154, 1)",
    borderWidth: 1
  },
  View_I0_3290_0_6220: {
    flexGrow: 1,
    width: wp("16.73469387755102%"),
    height: hp("4.67682718579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78.87755102040816%"),
    top: hp("0.5464480874316939%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_3290_0_6221: {
    width: wp("5.408163265306123%"),
    minWidth: wp("5.408163265306123%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.326530612244909%"),
    top: hp("0.5464480874316942%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_3290_0_6222: {
    flexGrow: 1,
    width: wp("4.8979591836734695%"),
    height: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I0_3290_0_6224: {
    width: wp("4.8979591836734695%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3290_0_6223: {
    width: wp("4.8979591836734695%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3290_0_6225: {
    width: wp("4.8979591836734695%"),
    height: hp("1.5710382513661203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3290_0_6227: {
    width: wp("0.30612244897959184%"),
    minWidth: wp("0.30612244897959184%"),
    height: hp("0.579773532888277%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.102040816326522%"),
    top: hp("0.4956188097677594%")
  },
  ImageBackground_I0_3290_0_6231: {
    width: wp("4.081632653061225%"),
    minWidth: wp("4.081632653061225%"),
    height: hp("1.0245901639344261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.4081632653061149%"),
    top: hp("0.27322404371584685%")
  },
  View_I0_3290_0_6235: {
    width: wp("8.571428571428571%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2448979591836746%"),
    top: hp("0%")
  },
  Text_I0_3290_0_6235: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.004800000227987766,
    textTransform: "none"
  },
  ImageBackground_I0_3290_0_6238: {
    width: wp("1.8367346938775513%"),
    height: hp("2.107728374460356%"),
    top: hp("0.27322404371584685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_3290_0_6240: {
    flexGrow: 1,
    width: wp("12.653061224489795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.83673469387755%"),
    top: hp("0.6830601092896176%")
  },
  Text_I0_3290_0_6240: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_3290_0_6241: {
    flexGrow: 1,
    width: wp("10.752687259596222%"),
    height: hp("2.1174863387978142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2244897959183674%"),
    top: hp("0.7513661202185793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I0_3290_0_6244: {
    width: wp("5.051020408163265%"),
    height: hp("2.0491803278688523%"),
    top: hp("0.06830601092896149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_3290_0_6249: {
    width: wp("4.427993151606346%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.324687101403061%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
