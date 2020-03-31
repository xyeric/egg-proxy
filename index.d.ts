declare module 'egg' {
  interface EggAppConfig {
    proxy: IProxy | IProxy[];
  }
  interface IProxy {
    host?: string;
    url?: string;
    match?: RegExp;
    map?: { [x: string]: string } | Function;
    jar?: boolean;
    suppressRequestHeaders?: string[];
    suppressResponseHeaders?: string[];
  }
}
