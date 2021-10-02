import React from 'react'
import '../../../html/css/style.css'



export const ProfileText: React.FC = () => {
  return(
    <div className='p-profile-top-text p-profile-top__sp'>
      <h2 className='p-profile-top-text__title'>
        <span className='p-profile-top-text__title_border-bottom u-pb_lg'>PROFILE</span>
      </h2>
      <p className='p-profile-top-text__text-body u-margin_right_auto u-margin_left_auto'>
      昭和音楽大学弦管打楽器演奏家コースを特待生として入学し優等賞を得て卒業。
      同大学院修士課程を学長賞を受賞し首席で卒業。卒業演奏会、第89回読売新聞社主催読売新人演奏会に推薦され出演。
      第15回九州音楽コンクールにて金賞併せて最優秀賞。第20回宮日音楽コンクール弦楽器部門にて最優秀賞。第30回全日本ジュニアクラシックコンクール全国大会弦楽器部門大学生の部第2位。
      第37回昭和音楽大学管弦楽団定期演奏会、第9回音楽大学オーケストラフェスティバルで斎藤一郎氏指揮のもとリムスキー＝コルサコフ作曲交響組曲「シェエラザード」を、
      第8回音楽大学フェスティバルオーケストラで小林研一郎氏指揮のもとベルリオーズ作曲幻想交響曲でコンサートミストレスを務める。
      これまでにヴァイオリンを篠﨑永育岩崎裕子、篠崎史紀各氏に、室内楽をジェラール・プーレ氏に師事。
      </p>
      <div className='p-profile-top-text__button u-text_center'>
        <span className='p-profile-top-text__button_text u-margin_right_auto u-margin_left_auto'>VIEW MORE</span>
      </div>
    </div>
  )
}