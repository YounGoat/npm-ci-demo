#   NPM CI Demo

This is an exercise about continuous delivery of NPM library or software.

#   Terms

By [*Semantic Versioning 2.0.0*](http://semver.org), a version number is in format of *MAJOR.MINOR.PATCH*. However, by *semantic-release*, they are also called *Breaking*, *Feature* and *Patch*.

#	Preparation

The following tools are used in our exercise:

*	__git__
*	__npm__
*	__semantic-release__  
	may be installed by ```npm install -g semantic-release```

You should have all these tools installed before doing exercise. And, you should have accounts on:

*   [npmjs.com](http://www.npmjs.com/)
*   [github.com](http://github.com/)

#   Start Up

1.  Create a new repository on github.com, then clone it into your local store:  
    ```bash
    # Suppose the repository is YounGoat/npm-ci-demo
    git clone https://github.com/YounGoat/npm-ci-demo.git
    ```

2.  Initiate the repository's root direction as an NPM project.
    ```bash
    cd npm-ci-demo
    npm init
    # Then to fill out as prompted.
    ```

3.  ... to be continued ...


#   References

tools, protocols and standards:
*   [Keep a CHANGELOG](http://keepachangelog.com/)
*   [Semantic Versioning 2.0.0](http://semver.org)
*   [Sentimental Versioning, Version One dot Oh, Erm...](http://sentimentalversioning.org)
*   [npm-dist-tag, Modify package distribution tags](https://docs.npmjs.com/cli/dist-tag)
*   [semantic-release](https://github.com/semantic-release/semantic-release)
*   [semantic-release-cli](https://github.com/semantic-release/cli)
*   [AngularJS Git Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit)

others:
*   [深入 Node 模块的安装和发布](https://segmentfault.com/a/1190000004221514)
