import { ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'

export const counterStore = defineStore('counter', () => {
	const count = ref(0)

	const doubleCount = computed(() => {
		return count.value * 2
	})

	function increment() {
		count.value++
	}

	function decrement() {
		if (count.value > 0) {
			count.value--
		}
	}

	function setCount(value) {
		if (value > -1) {
			count.value = value
		}
	}

	function resetCount() {
		count.value = 0
	}

	return { count, doubleCount, increment, decrement, setCount, resetCount }
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(counterStore, import.meta.hot))
}
