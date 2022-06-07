package common;

import com.moandjiezana.toml.Toml;


import java.io.File;

public class Credentials {
    protected static Toml tomlReader = new Toml().read(new File( "properties.toml"));

    protected String url = tomlReader.getString("url.url");
    protected String urlWeb = tomlReader.getString("url.urlWeb");
}
