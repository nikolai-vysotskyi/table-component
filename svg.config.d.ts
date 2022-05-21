// declare module "*.svg" {
// 	const content: any;
// 	export default content;
// 	// const filePath: string;
// 	// export default filePath;
// }
declare module "*.svg" {
	import Vue, {VueConstructor} from "vue";
	const content: VueConstructor<Vue>;
	export default content;
}