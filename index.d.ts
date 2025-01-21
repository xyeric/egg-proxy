declare module 'egg' {
  interface EggAppConfig {
    eggProxy: IProxy | IProxy[];
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
