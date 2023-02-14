type ttt = Promise < Promise < Promise < Record < string , any >>>>;

type DeepPromiseValueType2 <T> =
    T extends Promise <infer ValueType >
        ? DeepPromiseValueType2 < ValueType >
        : T;
type deee = DeepPromiseValueType2<Promise<Promise<Promise<number>>>>
