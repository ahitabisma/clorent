import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export interface Image {
  id: number
  defaultSrc: string
  hoverSrc: string
  title: string
  desc: string
  isHovered: boolean
}

export const useClothesStore = defineStore('cloth', () => {
  const images = ref<Image[]>([])
  const image = ref<Image>()

  async function getAllClothes() {
    try {
      const { data } = await axios.get(
        `https://script.google.com/macros/s/AKfycby0kDFz80hfHFHl8QZzx72XF8zwWMukyVkWAy-HR3hJsJ9VPvH0UC1PFIkAjBx_vmMM2Q/exec?action=clothes`
      )
      images.value = data
      return data
    } catch (error: Error | any) {
      throw error.message
    }
  }

  async function getClothById(id: number) {
    try {
      const { data } = await axios.get(
        `https://script.google.com/macros/s/AKfycby0kDFz80hfHFHl8QZzx72XF8zwWMukyVkWAy-HR3hJsJ9VPvH0UC1PFIkAjBx_vmMM2Q/exec?action=clothId&id=${id}`
      )
      image.value = data
      return data
    } catch (error: Error | any) {
      throw error.message
    }
  }

  const handleMouseOver = (index: number) => {
    images.value[index].isHovered = true
  }

  const handleMouseLeave = (index: number) => {
    images.value[index].isHovered = false
  }

  return { images, image, getAllClothes, getClothById, handleMouseLeave, handleMouseOver }
})
