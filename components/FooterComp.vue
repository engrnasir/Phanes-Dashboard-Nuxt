<template>
  <footer class="footer" :class="nightMode?'footer-night':''">
    <div class="row">
        <div class="columns">
            <div class="col1">
                <img src="@/assets/logo.png" alt="" class="logo">
                <div class="social-icons" v-if="nightMode">
                    <a href="" target="_blank"><img src="@/assets/facebook-night.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/twitter-night.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/discord-night.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/telegram-night.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/announcement-night.png" alt=""></a>
                </div>
                <div class="social-icons" v-else>
                    <a href="" target="_blank"><img src="@/assets/facebook.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/twitter.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/discord.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/telegram.svg" alt=""></a>
                    <a href="" target="_blank"><img src="@/assets/announcement.png" alt=""></a>
                </div>
            </div>
            <div class="col">
                <h3 class="title">Important Links</h3>
                <ul class="items">
                    <li class="item"><a href="#">Phanes Token</a></li>
                    <li class="item"><a href="#">Governance</a></li>
                    <li class="item"><a href="#">Indices</a></li>
                    <li class="item"><a href="#">Docs</a></li>
                    <li class="item"><a href="#">FAQ</a></li>
                </ul>
            </div>
            <div class="col">
                <h3 class="title">Support</h3>
                <ul class="items">
                    <li class="item"><a href="#" target="_blank">Contact</a></li>
                    <li class="item"><a href="#" target="_blank">Careers</a></li>
                    <li class="item"><a href="#" target="_blank">Blog</a></li>
                    <li class="item"><a href="#" target="_blank">Technical Paper</a></li>
                </ul>
            </div>
        </div>
        <div class="h-line"></div>
        <div class="copyright-text">
            <p class="text">Copyright ?? 2022 Phanes Network</p>
            <div class="right-links">
                <span>All Rights Reserved </span>|
                <a href="" target="_blank"> Terms and Conditions </a>|
                <a href="" target="_blank"> Privacy Policy</a>
            </div>
        </div>
    </div>
  </footer>
</template>

<script>
    import { mapState } from 'vuex';
export default {
    computed:{
        ...mapState([
            'nightMode'
        ])
    }

}
</script>

<style lang="scss" scoped>
    .footer{
        background: linear-gradient(rgba(10, 134, 156, 0.05), rgba(10, 134, 156, 0.034));
        padding-bottom: 50px;
        .columns{
            padding: 109px 24px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            @media only screen and (max-width:720px){
                display: grid;                
                grid-template-columns: repeat(1,1fr);
                grid-gap: 20px;
                padding:  60px 24px;
            }
            .col1{
                .logo{
                    height: 60px;
                    margin-bottom: 38px;
                    @media only screen and (max-width: 580px){
                        height: 40px;
                        margin-bottom: 20px;
                    }
                }
                .social-icons{
                    display: flex;
                    &>*:not(:last-child){
                        margin-right: 24px;
                    }
                    a{
                        color: #1BD19C;
                        
                        img{
                            width: 25px;
                            @media only screen and (max-width: 580px){
                                widht: 20px;
                            }
                        }
                    }
                }
            }
            .col{
                .title{
                    font-weight: 700;
                    font-size: 20px;
                    line-height: 22px;
                    color: #141414;
                    margin-bottom: 40px;
                    @media only screen and (max-width:720px){
                        margin-bottom: 20px;
                    }
                    @media only screen and (max-width: 580px){
                        font-size: 18px;
                        line-height: 20px;
                    }
                }
                .items{
                    list-style: none;
                    .item a{
                        text-decoration: none;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 20px;
                        color: #141414;
                        transition: all .2s;
                        @media only screen and (max-width: 580px){
                            font-size: 15px;
                            line-height: 15px;
                        }
                        &:hover{
                            color:#141414;
                            font-size: 20px;
                        }
                    }
                    .item{
                        margin-bottom: 18px;
                        @media only screen and (max-width: 580px){
                            margin-bottom: 10px;
                        }
                    }
                }
            }
        }
        .h-line{
            width: 100%;
            height: 0px;
            border: 1px solid #4f558086;
            margin-bottom: 25px;
        }
        .copyright-text{
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 400;
            font-size: 18px;
            line-height: 30px;
            color: #070E0C;
            @media only screen and (max-width:580px){
                font-size: 14px;
                line-height: 18px;
            }
            @media only screen and (max-width:920px){
                flex-direction: column;
                justify-content: center;
            }

            .right-links{
                @media only screen and (max-width:580px){
                    font-size: 12px;
                    line-height: 18px;
                }
                @media only screen and (max-width:380px){
                    font-size: 8px;
                }
                a{
                    text-decoration: underline;
                    color: #1BD19C;
                }
            }
        }
    }
    .footer-night{
        background: #070E0C;
        backdrop-filter: blur(20px);
        .columns{
            padding: 109px 24px;
            .col1{
                .social-icons{
                    a{
                        color: #fff;
                    }
                }
            }
            .col{
                .title{
                    color: #fff;
                }
                .items{
                    list-style: none;
                    .item a{
                        color: #EDEDED;
                        &:hover{
                            color:#fff;
                        }
                    }
                }
            }
        }
        .h-line{
            border: 1px solid #4F5580;
        }
        .copyright-text{
            color: #EDEDED;
        }
    }

</style>